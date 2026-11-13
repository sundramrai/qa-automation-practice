import {Page,Locator} from '@playwright/test'


export class ProductListPage{

    page:Page;
    addtocartButton:Locator;
    cartbadgeicon:Locator;
    cartIcon:Locator;




    constructor(page:Page){

        this.page=page;
        this.addtocartButton= page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon= page.locator('.shopping_cart_link');
        this.cartbadgeicon=page.locator('.shopping_cart_badge');
    }


    async ClickAddToCart(){

        await this.addtocartButton.click();


    }


    async clickCartBadgeIcon(){
        await this.cartbadgeicon.click();

    }

}