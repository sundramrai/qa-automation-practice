import {test,expect} from "@playwright/test"

test("Iframe Demo",async({page})=>{

    await page.goto("https://jqueryui.com/autocomplete/");

    // OLD: const frame1 = await page.frameLocator('.demo-frame');
    // NEW: frameLocator bhi locator jaisa hai, await nahi lagta
    const frame1 = page.frameLocator('.demo-frame');
    const tags = frame1.locator('id=tags');

    await tags.fill("JavaScript");

    // OLD: await page.waitForTimeout(2000);  (aur koi check nahi)
    // NEW: check karo ki iframe ke andar wale input mein text aaya
    await expect(tags).toHaveValue("JavaScript");

})
