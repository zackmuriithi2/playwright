import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kamau.lilian@eclectics.io');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('5rD6l8#K');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.getByRole('button', { name: 'Select View ' }).click();
  await page.getByRole('button', { name: 'Table View' }).click();
  await page.getByRole('row', { name: 'Wallet Account Personal' }).getByRole('button').click();
  await page.getByText('View', { exact: true }).click();
  await page.locator('#profileDropdown').click();
  await page.locator('a').filter({ hasText: 'Log Out' }).click();
});