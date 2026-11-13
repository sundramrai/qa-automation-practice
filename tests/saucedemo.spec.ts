import { test, expect } from '@playwright/test';

// Har test se pehle login karo
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('header match karo', async ({ page }) => {
  // Browser tab ka title
  await expect(page).toHaveTitle('Swag Labs');

  // URL sahi page ka hai
  await expect(page).toHaveURL(/inventory\.html/);

  // Page ka logo / header text
  await expect(page.locator('.app_logo')).toHaveText('Swag Labs');

  // Section heading "Products"
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('cart count match karo', async ({ page }) => {
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

  // Shuru mein cart khaali hai, badge dikhna nahi chahiye
  await expect(cartBadge).toBeHidden();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(cartBadge).toHaveText('1');

  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(cartBadge).toHaveText('2');

  // Ek item hatao, count wapas 1
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  await expect(cartBadge).toHaveText('1');
});

test('cart mein item ka naam aur price match karo', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Cart page ki heading
  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');

  // Cart mein exactly 1 item hai
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);

  // Item ka naam aur price
  await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText('$29.99');
});

test('checkout pe total value match karo', async ({ page }) => {
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

  // Page se saare prices padh ke khud jodo, aur subtotal se match karo
  const prices = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  const sum = prices.reduce((total, p) => total + parseFloat(p.replace('$', '')), 0);
  await expect(page.locator('[data-test="subtotal-label"]')).toContainText(sum.toFixed(2));
});
