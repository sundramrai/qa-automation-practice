import {test,expect} from '@playwright/test';
import fs from 'fs';

test('screenshot demo',async function({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/');


    const ele = page.getByText('Get Started Free');
    await expect(ele).toBeVisible();

    await ele.screenshot({path :'screenshots/ele.png'});

    
    expect(fs.existsSync('screenshots/ele.png')).toBeTruthy();

})
