import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kamau.lilian@eclectics.io');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('5rD6l8#K');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Main' }).click();
  await page.getByRole('link', { name: 'Products' }).click();
  await page.getByRole('link', { name: 'All Products' }).click();
  await page.locator('[id="\\38 73"]').getByRole('link', { name: 'View' }).click();
  await page.getByRole('button', { name: 'Add Benefit' }).click();
  await page.locator('div').filter({ hasText: /^Benefit$/ }).nth(2).click();
  await page.getByRole('textbox').first().fill('fgfggg');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('hfhdd');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('dfhdh');
  await page.getByRole('button', { name: 'Add Benefit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('a').filter({ hasText: 'Products' }).first().click();
  await page.getByText('Product Categories').click();
  await page.locator('[id="\\33 0"]').getByText('View Products').click();
  await page.getByText('Add Product').click();
  await page.getByLabel('Close').click();
  await page.locator('a').filter({ hasText: 'Main' }).click();
  await page.getByText('Dashboard').click();
  await page.getByText('Value of Transactions in USD').click();
  await page.getByText('35,084 +3.3%').click();
  await page.locator('a').filter({ hasText: 'Card Management' }).click();
  await page.locator('a').filter({ hasText: 'Products' }).first().click();
  await page.getByText('All Products').click();
  await page.locator('[id="\\38 71"]').getByAltText('undefined').click();
  await page.locator('[id="\\38 71"]').getByText('View').click();
  await page.getByText('Add Benefit').click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('grhfh');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('hduufud');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('dhfjf');
  await page.getByRole('button', { name: 'Add Benefit' }).click();
});