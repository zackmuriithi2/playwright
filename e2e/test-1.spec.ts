import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login%20kamau.lilian@eclectics.io%205rD6l8#K%20Mobile%20Banking');
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('kamau.lilian@eclectics.io');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('5rD6l8#K');
  await page.getByPlaceholder('password').press('Enter');
  //await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/dashboard');
  await page.getByRole('link', { name: 'Customers' }).click();
  await page.getByRole('link', { name: 'All Customers' }).click();
  await page.getByRole('row', { name: 'Ann Uduj 254721221433 225588' }).getByRole('button').click();
  await page.getByRole('link', { name: 'Channel Management' }).click();
  await page.getByRole('link', { name: 'Channels' }).click();
});