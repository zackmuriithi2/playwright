import { test, expect } from '@playwright/test';

test('det env test', async ({ page, request }) => {
  // Navigate to the login page using the URL from the .env file
  await page.goto(process.env.URL);

  // Fill in the username and password fields with environment variables
  await page.locator('#userName').click();
  await page.locator('#userName').fill(process.env.USERNAME);
  await page.locator('#password').click();
  await page.locator('#password').fill(process.env.PASSWORD);

  // Perform login and logout actions
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: process.env.USERNAME }).click();
  await page.getByText('Logout').click();

  // Close the page
  await page.close();
});
