import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kamau.lilian@eclectics.io');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('5rD6l8#K');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'Product Categories' }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByRole('link', { name: 'Wallet Accounts' }).click();
  await page.getByRole('link', { name: 'Channel Management' }).click();
  await page.getByRole('link', { name: 'Offline Mode' }).click();
  await page.getByRole('link', { name: 'Go Online' }).click();
});