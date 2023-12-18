import { test, expect } from '@playwright/test';

test('Test hero section text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('When it comes to beverages,').click();
});

test('Check link to Newsletter works', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'To Our Newsletter' }).click();
});

test('Check if Navbar text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Velvet').click();
});

test('Check if Navbar content is not empty', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Established in 1970').click();
});

test('Check if second part of hero section is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('we\'re liquid craftsmen.').click();
});

test('Check if email box  is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Your email').click();
});

test('Check if newsletter page text is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Sign up for newsletters and' }).click();
});

test('Check if Home link functions', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'To Our Newsletter' }).click();
});

test('Check if subtext of hero section is present', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('We always guarantee that our').click();
});

test('Check if first jumbotron component is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('[id="__next"] div').filter({ hasText: 'When it comes to drinks,we\'re' }).nth(2).click();
});

test('Check if second jumbotron component is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('[id="__next"] div').filter({ hasText: 'Drink. Shop.Taste. Smile.' }).nth(2).click();
});

test('Check if top half of second jumbotron header text is not empty', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Drink. Shop.').click();
});

test('Test if second jumbotron subtext is not empty', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('Discover our rewards program').click();
});

test('Test if Discover More button is functional', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Discover More' }).click();
});

test('Test if first social media link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('img').first().click();
});

test('Test if second social media link is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('img').nth(1).click();
});