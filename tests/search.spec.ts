import { test, expect, Page, Locator } from '@playwright/test';

export async function abrirCampoDeBusca(page: Page): Promise<Locator> {
  const searchButton = page.getByRole('link', { name: 'Link do ícone de pesquisa' });
  await searchButton.click();

  await page.waitForSelector('input.search-field', { state: 'attached', timeout: 10000 });

  await page.evaluate(() => {
    const input = document.querySelector('input.search-field') as HTMLElement | null;
    if (input) {
      input.style.opacity = '1';
      input.style.visibility = 'visible';
      input.style.display = 'block';
      input.removeAttribute('tabindex');
    }
  });

  const searchInput = page.locator('input.search-field');
  await searchInput.click();

  return searchInput;
}

test('🧪 Deve retornar resultados ao buscar por um termo existente', async ({ page }) => {
  await page.goto('https://blogdoagi.com.br/', { waitUntil: 'load' });

  const searchInput = await abrirCampoDeBusca(page);

  await page.evaluate(() => {
    const input = document.querySelector('input.search-field') as HTMLInputElement | null;
    if (input) {
      input.value = 'cartão';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  const submitButton = page.locator('button[type="submit"]');
  if (await submitButton.isVisible()) {
    await submitButton.click();
  } else {
    await page.keyboard.press('Enter');
  }

  const articles = page.locator('article');
  await expect(articles.first()).toBeVisible({ timeout: 10000 });
});

test('🧪 Deve retornar nenhum resultado ao buscar por um termo inexistente', async ({ page }) => {
  await page.goto('https://blogdoagi.com.br/', { waitUntil: 'load' });

  const searchInput = await abrirCampoDeBusca(page);

  await page.evaluate(() => {
    const input = document.querySelector('input.search-field') as HTMLInputElement | null;
    if (input) {
      input.value = 'terminoinexistente123';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  const submitButton = page.locator('button[type="submit"]');
  if (await submitButton.isVisible()) {
    await submitButton.click();
  } else {
    await page.keyboard.press('Enter');
  }

  await expect(page.locator('text=Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')).toBeVisible({ timeout: 10000 });
});
