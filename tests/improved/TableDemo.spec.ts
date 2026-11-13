import {test,expect} from '@playwright/test'

test('Table test',async function ({page}){

    await page.goto('https://www.testmuai.com/selenium-playground/table-search-filter-demo/');

  
    const allcolomn = page.locator('thead tr th');
    await expect(allcolomn).toHaveCount(8);

    const allrow = page.locator('tbody tr');
    await expect(allrow).toHaveCount(14);

});
