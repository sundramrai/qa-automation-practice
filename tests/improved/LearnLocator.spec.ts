import {test,expect } from "@playwright/test";

test('Check locator',async function({page}){

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    // OLD: await page.getByTestId('edit-profile-btn-1').click();
    // Page pe 'edit-profile-btn-1' naam ka koi element nahi hai, isliye 30 second baad timeout hota tha.
    // Asli data-testid 'edit-profile-btn' hai (DevTools mein Inspect karke dekha).
    const editButton = page.getByTestId('edit-profile-btn');

    // NEW: click se pehle check karo ki button dikh raha hai
    await expect(editButton).toBeVisible();
    await editButton.click();

    // OLD: await page.waitForTimeout(5000)
    // NEW: hata diya. Test khatam hone ke baad rukne ka koi fayda nahi.

})
