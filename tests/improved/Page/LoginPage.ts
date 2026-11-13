import {Page,Locator} from '@playwright/test'

export class LoginPage{

page:Page;
username:Locator;
password:Locator;
loginButton:Locator;

constructor(page:Page){

    this.page=page;
    this.username=page.locator('#user-name');
    this.password=page.locator('#password');
    this.loginButton=page.locator('#login-button');
}

async GoToApplication(){
    await this.page.goto('https://www.saucedemo.com/');
}

 async doLogin(){
    // OLD: har line ke baad await this.page.waitForTimeout(1000);
    // NEW: hata diye. fill() aur click() khud element ke ready hone ka wait karte hain.
    await this.username.fill('standard_user');
    await this.password.fill('secret_sauce');
    await this.loginButton.click();

 }

}
