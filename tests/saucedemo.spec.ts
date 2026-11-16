import { test, expect } from '@playwright/test';

// Log in before every test
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('header matches', async ({ page }) => {
  // Browser tab title
  await expect(page).toHaveTitle('Swag Labs');

  // URL is the inventory page
  await expect(page).toHaveURL(/inventory\.html/);

  // Logo / header text
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');

  // Section heading "Products"
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('cart count matches', async ({ page }) => {
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

  // Cart starts empty, so the badge should not be shown
  await expect(cartBadge).toBeHidden();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(cartBadge).toHaveText('1');

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(cartBadge).toHaveText('2');

  // Remove one item, count goes back to 1
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await expect(cartBadge).toHaveText('1');
});

test('cart item name and price match', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Cart page heading
  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');

  // Exactly 1 item in the cart
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);

  // Item name and price
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText('$29.99');
});

test('checkout item total matches', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();   // $29.99
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click(); // $9.99
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Sundram');
  await page.locator('[data-test="lastName"]').fill('Rai');
  await page.locator('[data-test="postalCode"]').fill('110001');
  await page.locator('[data-test="continue"]').click();

  // Item total = 29.99 + 9.99 = 39.98
  await expect(page.locator('[data-test="subtotal-label"]')).toHaveText('Item total: $39.98');

  // Add up the prices shown on the page and compare with the subtotal
  const prices = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  const sum = prices.reduce((total, p) => total + parseFloat(p.replace('$', '')), 0);
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText(sum.toFixed(2));
});
