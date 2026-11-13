import {test,expect } from "@playwright/test";

test('Check locator',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');


    const editButton = page.getByTestId('edit-profile-btn');

    await expect(editButton).toBeVisible();
    await editButton.click();

})
