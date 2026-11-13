import {test,expect} from "@playwright/test";

test ("Multitab test", async function ({page,context}){

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const promisePage= context.waitForEvent('page');

    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();

    const newPage=await promisePage;

    // OLD: console.log("New page title is",await newPage.title());
    // NEW: print karne ki jagah check karo ki naya tab sahi site pe khula
    await expect(newPage).toHaveURL(/orangehrm\.com/);
    await expect(newPage).toHaveTitle(/OrangeHRM/);

    await page.bringToFront();

    // NEW: purana tab abhi bhi login page pe hai
    await expect(page.getByPlaceholder('Username')).toBeVisible();

    // OLD: await page.waitForTimeout(3000);  (hata diya)

})
