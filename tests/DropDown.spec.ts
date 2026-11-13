import {test,expect} from '@playwright/test'

test('Drop Down test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

    await page .waitForTimeout(3000);

    //await page.locator('[name=country]').selectOption({label:'India'}); //for selection by label

    //await page.locator('[name=country]').selectOption({index:10}); //for selection by index

    await page.locator('[name=country]').selectOption({value:'AU'}); //for selection by value

    await page .waitForTimeout(1000);

})