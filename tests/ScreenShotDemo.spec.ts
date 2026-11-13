import {test,expect} from '@playwright/test';

test('screenshot demo',async function({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/');

    await page.waitForTimeout(2000);

    // View port screenshot
    //await page.screenshot({path: 'viewport.png'});


    // Full page screenshot
    //await page.screenshot({path: 'fullpage.png', fullPage: true});

    // Element screenshot
    const ele =await page.getByText('Get Started Free');
    await ele.screenshot({path :'ele.png'});

})