import {test,expect} from '@playwright/test';

test('login test',async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/')

    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    await page .waitForTimeout(1000);

    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button',{name:'Submit'}).click();

    await page .waitForTimeout(3000);

    await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');


    await page .waitForTimeout(3000);

    await page.getByText('Log Out').click();

    await page .waitForTimeout(1000);

    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');


})
