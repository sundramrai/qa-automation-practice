import {test,expect} from "@playwright/test";

test ("Multitab test", async function ({page,context}){

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const promisePage= context.waitForEvent('page');

    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();

    const newPage=await promisePage;


    await expect(newPage).toHaveURL(/orangehrm\.com/);
    await expect(newPage).toHaveTitle(/OrangeHRM/);

    await page.bringToFront();

   
    await expect(page.getByPlaceholder('Username')).toBeVisible();



})
