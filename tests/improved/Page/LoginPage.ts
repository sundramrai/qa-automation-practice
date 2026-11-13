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
    await this.username.fill('standard_user');
    await this.password.fill('secret_sauce');
    await this.loginButton.click();

 }

}
