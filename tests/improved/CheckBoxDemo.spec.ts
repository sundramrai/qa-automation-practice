import {test,expect} from '@playwright/test'

test('Check box test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/checkbox-demo/');

    const allcheckboxes = page.locator("input[type='checkbox']");

    await expect(allcheckboxes.first()).not.toBeChecked();
    await expect(allcheckboxes.nth(1)).not.toBeChecked();
    await expect(allcheckboxes.nth(2)).not.toBeChecked();
    await expect(allcheckboxes.nth(3)).not.toBeChecked();

    await expect(allcheckboxes.first()).toBeEnabled();

    await allcheckboxes.nth(0).check();
   
    await expect(allcheckboxes.nth(0)).toBeChecked();

    await allcheckboxes.first().uncheck();
    await expect(allcheckboxes.nth(0)).not.toBeChecked();

   
    await expect(allcheckboxes.nth(3)).toBeDisabled();

});
