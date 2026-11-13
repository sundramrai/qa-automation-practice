import {Page,Locator} from '@playwright/test'


export class Cartpage{

    page:Page;
    CartLocator:Locator;


    constructor(page:Page){

        this.page=page;
        this.CartLocator= page.locator('#item_4_title_link');
    }

}
