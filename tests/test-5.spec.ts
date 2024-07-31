import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kamau.lilian@eclectics.io');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('5rD6l8#K');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.locator('[id="\\38 73"]').getByRole('link', { name: 'View' }).click();
  await page.getByRole('button', { name: 'Add Benefit' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('hjj');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('jjk');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('jjkkj');
  await page.getByRole('button', { name: 'Add Benefit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});