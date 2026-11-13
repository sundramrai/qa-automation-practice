import {test,expect} from "@playwright/test"

test("Iframe Demo",async({page})=>{

    await page.goto("https://jqueryui.com/autocomplete/");

    const frame1 = await page.frameLocator('.demo-frame');
    
    await frame1.locator('id=tags').fill("JavaScript");

    await page.waitForTimeout(2000);
});