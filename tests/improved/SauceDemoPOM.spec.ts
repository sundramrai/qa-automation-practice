import {test,expect} from '@playwright/test';
import { LoginPage } from './Page/LoginPage';
import { ProductListPage} from '../Page/ProductListPage';
import {Cartpage} from '../Page/Cartpage';

test ('add to cart click validate',async function({page}){
const loginpage = new LoginPage(page);

    await loginpage.GoToApplication();
    await loginpage.doLogin();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const productlistPage= new ProductListPage(page);

    await productlistPage.ClickAddToCart();

    await expect(productlistPage.cartbadgeicon).toHaveText('1');

    await productlistPage.clickCartBadgeIcon();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    const cartpage= new Cartpage(page)

    await expect(cartpage.CartLocator).toHaveText('Sauce Labs Backpack');

})
