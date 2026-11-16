import {Page,Locator} from '@playwright/test'


export class Cartpage{

    page:Page;
    CartLocator:Locator;


    constructor(page:Page){

        this.page=page;
        // Scoped to .cart_item: #item_4_title_link also exists on the inventory page,
        // so the unscoped locator could pass before the cart page has loaded.
        this.CartLocator= page.locator('.cart_item .inventory_item_name');
    }

}
