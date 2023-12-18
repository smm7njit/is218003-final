import { test, expect } from '@playwright/test';

test('Test hero section text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('When it comes to beverages,').click();
});

test('Check link to Newsletter works', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'To Our Newsletter' }).click();
});

test('Check if email box placeholder is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Your email').click();
});

test('Check if Navbar text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Velvet').click();
});




