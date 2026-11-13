import {test,expect} from "@playwright/test"

test("Iframe Demo",async({page})=>{

    await page.goto("https://jqueryui.com/autocomplete/");

    const frame1 = page.frameLocator('.demo-frame');
    const tags = frame1.locator('id=tags');

    await tags.fill("JavaScript");


    await expect(tags).toHaveValue("JavaScript");

})
