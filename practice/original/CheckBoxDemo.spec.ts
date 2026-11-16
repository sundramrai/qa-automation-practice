import {test,expect} from '@playwright/test'

test('Check box test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');
    await page.waitForTimeout(3000);

    const allcheckboxes = await page.locator("input[type='checkbox']"); 
    
    await expect(allcheckboxes.first()).not.toBeChecked(); //for checking the first checkbox
    await expect(allcheckboxes.nth(1)).not.toBeChecked(); //for checking the second checkbox
    await expect(allcheckboxes.nth(2)).not.toBeChecked(); //for checking the third checkbox
    await expect(allcheckboxes.nth(3)).not.toBeChecked(); //for checking the fourth checkbox

    await expect(allcheckboxes.first()).toBeEnabled(); //for checking the first checkbox is enabled or not

    await allcheckboxes.nth(0).check();
    await page.waitForTimeout(2000);
    console.log("First checkbox checked", await allcheckboxes.nth(0).isChecked()); //for checking the first checkbox
    
    await allcheckboxes.first().uncheck(); //for checking the second checkbox
    await page.waitForTimeout(2000);
    console.log("First checkbox checked", await allcheckboxes.nth(0).isChecked()); 
    await page.waitForTimeout(3000);

    console.log("Fourth checkbox checked", await allcheckboxes.nth(3).isEnabled());




});