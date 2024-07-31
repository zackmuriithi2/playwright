import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test-portal.ekenya.co.ke/mobile-banking/auth/login');
});