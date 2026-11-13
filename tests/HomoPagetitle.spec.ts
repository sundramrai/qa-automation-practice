import {test,expect} from "@playwright/test"


test("validate the title of page",async function ({page}) {

     await page.goto('https://demoblaze.com/index.html')
     await expect(page).toHaveTitle('STORE'); 

})