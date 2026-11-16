import {test,expect } from "@playwright/test";

test('Check locator',async function({page}){

    // Skip before opening the page, so a slow or blocked site on CI cannot fail the test.
    test.skip(!!process.env.CI, 'Blogspot serves a different page to GitHub runners');

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const editButton = page.getByTestId('edit-profile-btn');

    await expect(editButton).toBeVisible();
    await editButton.click();

})
