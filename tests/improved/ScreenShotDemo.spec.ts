import {test,expect} from '@playwright/test';
import fs from 'fs';

test('screenshot demo',async function({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/');

    // OLD: await page.waitForTimeout(2000);
    // OLD: const ele =await page.getByText('Get Started Free');
    // NEW: await hataya, aur screenshot se pehle check kiya ki element dikh raha hai
    const ele = page.getByText('Get Started Free');
    await expect(ele).toBeVisible();

    // NEW: screenshot project ke root ki jagah screenshots/ folder mein
    await ele.screenshot({path :'screenshots/ele.png'});

    // NEW: check karo ki file sach mein bani
    expect(fs.existsSync('screenshots/ele.png')).toBeTruthy();

})
