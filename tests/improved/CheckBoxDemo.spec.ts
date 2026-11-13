import {test,expect} from '@playwright/test'

test('Check box test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
    // OLD: await page.waitForTimeout(3000);
    // NEW: hata diya. Neeche wale expect() khud 5 second tak retry karte hain.

    // OLD: const allcheckboxes = await page.locator(...)
    // NEW: locator banane mein await nahi lagta
    const allcheckboxes = page.locator("input[type='checkbox']");

    await expect(allcheckboxes.first()).not.toBeChecked();
    await expect(allcheckboxes.nth(1)).not.toBeChecked();
    await expect(allcheckboxes.nth(2)).not.toBeChecked();
    await expect(allcheckboxes.nth(3)).not.toBeChecked();

    await expect(allcheckboxes.first()).toBeEnabled();

    await allcheckboxes.nth(0).check();
    // OLD: waitForTimeout(2000) + console.log(isChecked())
    // NEW: print karne ki jagah check karo. Galat hua to test fail hoga.
    await expect(allcheckboxes.nth(0)).toBeChecked();

    await allcheckboxes.first().uncheck();
    await expect(allcheckboxes.nth(0)).not.toBeChecked();

    // OLD: console.log("Fourth checkbox checked", await allcheckboxes.nth(3).isEnabled());
    // NEW: nth(3) = "Option 3", jo page pe disabled hai
    await expect(allcheckboxes.nth(3)).toBeDisabled();

});
