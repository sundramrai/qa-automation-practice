import {test,expect} from '@playwright/test';

// Is file mein expect pehle se sahi the. Sirf waitForTimeout hataye hain.
test('login test',async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    // OLD: await page.waitForTimeout(1000);  (fill() khud wait karta hai)

    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click();

    // OLD: await page.waitForTimeout(3000);
    // NEW: toHaveTitle() khud naye page ke load hone ka wait karta hai (default 5 sec).
    // Ye site login ke baad slow hai, isliye sirf isi check ko 15 sec tak ka time diya.
    // waitForTimeout hamesha poore 3 sec rukta hai; ye page aate hi aage badh jayega.
    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation', { timeout: 15000 });
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    // OLD: await page.waitForTimeout(3000);
    await page.getByText('Log Out').click();

    // OLD: await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

})
