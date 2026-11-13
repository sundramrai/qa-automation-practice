import {test,expect } from "@playwright/test";
 
test('Check locator',async function({page}){


    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByTestId('edit-profile-btn-1').click();


//Get by placeholder element


// await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

// await page.getByPlaceholder('username').fill('admin');
// await page.waitForTimeout(1000);
// await page.getByPlaceholder('password').fill('admin123');
// await page.waitForTimeout(1000);
// await page.getByRole('button',{name: 'Login'}).click();
// await page.waitForTimeout(1000); 





//Get by text and title Element

     //await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');

    // await page.getByText('Get Started Free').click();

    //await page.getByTitle('Hello, have a question? Let’s chat.').click();





    //Get by Role Element and Label element

     //await page.goto('https://practicetestautomation.com/practice-test-login/');

    // await page.getByRole('button',{name:'Submit'}).click();

    // await page.getByRole('link',{name:'Blog'}).click();

    // await page.getByLabel('username').fill('student');
    // await page.getByLabel('password').fill('Password123');
    // await page.waitForTimeout(5000)
    // await page.getByRole('button',{name: 'Submit'}).click();

    await page.waitForTimeout(5000)

})