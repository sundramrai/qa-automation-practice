import { test, expect, Page } from '@playwright/test'

// All tests in this file share one page, so run them one after another in a single worker.
// Without this, fullyParallel in the config could split them across workers,
// and each worker would run beforeAll and log in again.
test.describe.configure({ mode: 'serial' });

let page: Page;
test.beforeAll(async function ({ browser }) {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

})

test.afterAll(async function () {
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    // We opened this page ourselves in beforeAll, so we have to close it ourselves.
    await page.close();
});

test('Validate Inventory page', async function () {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('add to cart', async function () {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
})