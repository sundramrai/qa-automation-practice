import {test,expect} from '@playwright/test'

test('Drop Down test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');


    const country = page.locator('[name=country]');

    await country.selectOption({value:'AU'}); 

   
    await expect(country).toHaveValue('AU');


    await country.selectOption({label:'India'});
    await expect(country).toHaveValue('IN');

})
