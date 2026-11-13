import {test,expect} from '@playwright/test';

// Is file mein expect pehle se sahi the. Sirf waitForTimeout hataye hain.
test('login test',async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');



    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click();


    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation', { timeout: 15000 });
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    
    await page.getByText('Log Out').click();

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

})
