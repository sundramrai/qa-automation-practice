import {test,expect} from "@playwright/test"

test("JS alert demo test",async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/');

    page.on('dialog' ,async dialog =>{

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name');
        await dialog.accept('SundramPW');
    });

    // The "Click Me" button next to the "Prompt box:" label (the page has 3 "Click Me" buttons).
    const promptButton = page.locator('p', { hasText: 'Prompt box' }).getByRole('button', { name: 'Click Me' });
    const result = page.locator('#prompt-demo');

    // The page is built with React. A click right after load can land before React is ready
    // and do nothing, so retry the click until the result text appears.
    await expect(async () => {
        await promptButton.click();
        await expect(result).toHaveText("You have entered 'SundramPW' !", { timeout: 2000 });
    }).toPass({ timeout: 15000 });

})
