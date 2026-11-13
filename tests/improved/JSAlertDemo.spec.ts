import {test,expect} from "@playwright/test"

test("JS alert demo test",async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    // OLD: await page.waitForTimeout(3000);
    // Ye page React se banta hai. Load hone ke turant baad button pe click ka asar nahi hota,
    // isliye aapko 3 second rukna pad raha tha.
    // NEW: fixed time ki jagah tab tak ruko jab tak page ki saari network calls khatam na ho jaayein.
    await page.waitForLoadState('networkidle');

    page.on('dialog' ,async dialog =>{

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name');
        await dialog.accept('SundramPW');
    });

    await page.locator('//*[@id="__next"]/div/main/section[2]/div/div/div/div[3]/p[1]/button').click();

    await expect(page.locator('#prompt-demo')).toHaveText("You have entered 'SundramPW' !");

})
