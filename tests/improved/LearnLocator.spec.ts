import {test,expect } from "@playwright/test";

test('Check locator',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');


    test.skip(!!process.env.CI, 'Blogspot site GitHub runner pe alag page dikhati hai');
    const editButton = page.getByTestId('edit-profile-btn');

    await expect(editButton).toBeVisible();
    await editButton.click();

})
