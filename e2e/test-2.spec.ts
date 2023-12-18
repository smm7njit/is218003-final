import { test, expect } from '@playwright/test';

test('Test hero section text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('When it comes to beverages,').click();
});




