import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://testgateway.ekenya.co.ke:8443/PGAdmin/web/transactions/index');
  await page.getByRole('link', { name: 'Get started' }).click();

  await page.getByRole('button', { name: 'Playwright Test' }).click();
  await page.getByRole('button', { name: 'Playwright Test' }).click();
  await page.getByRole('link', { name: 'Test configuration' }).click();
});