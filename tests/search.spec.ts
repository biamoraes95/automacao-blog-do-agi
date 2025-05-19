import { test, expect, Page, Locator } from '@playwright/test';

export async function abrirCampoDeBusca(page: Page): Promise<Locator> {
  const searchButton = page.locator('div.ast-search-menu-icon');

  await searchButton.waitFor({ state: 'visible', timeout: 10000 });
  await searchButton.waitFor({ state: 'attached' });

  await page.waitForTimeout(500); // ajuda com timing do clique

  // Clica via evaluate pra forçar o comportamento JS do site
  await page.evaluate(() => {
    const button = document.querySelector('div.ast-search-menu-icon') as HTMLElement;
    if (button) button.click();
  });

  await page.waitForTimeout(1000); // aguarda input abrir corretamente

  const searchInput = page.locator('input.search-field');

  // Aguarda que esteja visível de verdade (não só no DOM)
  await page.waitForFunction(() => {
    const input = document.querySelector('input.search-field');
    if (!input) return false;
    const style = window.getComputedStyle(input);
    return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
  }, { timeout: 10000 });

  await searchInput.click();
  return searchInput;
}

test('🧪 Deve retornar resultados ao buscar por um termo existente', async ({ page }) => {
  await page.goto('https://blogdoagi.com.br/', { waitUntil: 'domcontentloaded' });

  const searchInput = await abrirCampoDeBusca(page);

  await searchInput.fill('cartão');
  await page.keyboard.press('Enter');

  const articles = page.locator('article');
  await expect(articles.first()).toBeVisible({ timeout: 10000 });
});

test('🧪 Deve retornar nenhum resultado ao buscar por um termo inexistente', async ({ page }) => {
  await page.goto('https://blogdoagi.com.br/', { waitUntil: 'domcontentloaded' });

  const searchInput = await abrirCampoDeBusca(page);

  await searchInput.fill('terminoinexistente123');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.keyboard.press('Enter'),
  ]);

  await expect(page.locator('text=Nenhum resultado encontrado')).toBeVisible({ timeout: 10000 });
});
