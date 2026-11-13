import {test,expect} from '@playwright/test';
// NEW: LoginPage ka naya version (bina waitForTimeout ke)
import { LoginPage } from './Page/LoginPage';
// Ye dono files badli nahi, isliye purani hi use kar rahe hain
import { ProductListPage} from '../Page/ProductListPage';
import {Cartpage} from '../Page/Cartpage';

test ('add to cart click validate',async function({page}){
const loginpage = new LoginPage(page);

    await loginpage.GoToApplication();
    await loginpage.doLogin();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const productlistPage= new ProductListPage(page);

    await productlistPage.ClickAddToCart();

    // OLD: await expect(productlistPage.cartbadgeicon).toHaveCount(1);
    // Ye sirf itna check karta hai ki badge dikh raha hai, ye nahi ki usme kya number likha hai.
    // NEW: badge pe "1" likha hai, ye check karo
    await expect(productlistPage.cartbadgeicon).toHaveText('1');

    await productlistPage.clickCartBadgeIcon();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    // OLD: await page.waitForTimeout(4000);  (hata diya)

    const cartpage= new Cartpage(page)

    await expect(cartpage.CartLocator).toHaveText('Sauce Labs Backpack');

})
