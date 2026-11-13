import {test,expect} from "@playwright/test";

test ("Multitab test", async function ({page,context}){


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const promisePage= context.waitForEvent('page');

    await page.getByRole('link',{name:'OrangeHRM, Inc'}).click();

    const newPage=await promisePage;

    console.log("New page title is",await newPage.title());




    await page.bringToFront();
    

    await page.waitForTimeout(3000);



})