import {test,expect} from '@playwright/test'

test('Table test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/table-search-filter-demo/');

    // OLD: await page.waitForTimeout(3000);
    //      const colomnCount = await allcolomn.count();
    //      expect(colomnCount).toBe(8);
    // count() turant ginta hai. Table load nahi hui to 0 milega, isliye 3 second rukna padta tha.
    // NEW: toHaveCount() tab tak retry karta hai jab tak count match na ho jaye (max 5 sec).
    const allcolomn = page.locator('thead tr th');
    await expect(allcolomn).toHaveCount(8);

    const allrow = page.locator('tbody tr');
    await expect(allrow).toHaveCount(14);

});
