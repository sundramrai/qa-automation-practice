import {test,expect} from "@playwright/test"

test("JS alert demo test",async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');
    await page.waitForTimeout(3000);

    page.on('dialog' ,async dialog =>{

        console.log(await dialog.message());
        await dialog.accept('SundramPW'); //for accept the alert
        //await dialog.dismiss(); //for dismiss the alert
    });

    //await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[1]/p/button').click();//for simple alert
    //await page .locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[2]/div/p[1]/button').click();//for confirm alert
    await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[3]/p[1]/button').click();

await page.waitForTimeout(3000);
     
})