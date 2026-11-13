import {test,expect} from '@playwright/test'

test('Drop Down test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

    // OLD: await page.waitForTimeout(3000);
    // NEW: hata diya. selectOption() khud dropdown ke ready hone ka wait karta hai.

    const country = page.locator('[name=country]');

    await country.selectOption({value:'AU'}); //for selection by value

    // NEW: pehle koi check nahi tha, test hamesha pass hota.
    // Ab check karte hain ki sach mein 'AU' select hua.
    await expect(country).toHaveValue('AU');

    // Label se select karke bhi check kar sakte hain
    await country.selectOption({label:'India'});
    await expect(country).toHaveValue('IN');

})
