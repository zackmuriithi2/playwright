import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kamau.lilian@eclectics.io');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('5rD6l8#K');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/dashboard');
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.locator('[id="\\38 71"]').getByRole('link', { name: 'View' }).click();
  await page.getByRole('link', { name: 'Setup' }).click();
  await page.getByRole('link', { name: 'ATMs' }).click();
  await page.getByRole('link', { name: 'Services Module' }).click();
  await page.getByRole('button', { name: 'Add ATMs' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('hjjjj');
  await page.getByRole('textbox').nth(2).fill('j');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('jjj');
  await page.locator('#branch').selectOption('53');
  await page.getByRole('button', { name: 'Create ATM' }).click();
});