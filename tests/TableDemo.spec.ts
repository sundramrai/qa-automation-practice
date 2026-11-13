import {test,expect} from '@playwright/test'

test('Table test',async function ({page}){


    await page.goto('https://www.testmuai.com/selenium-playground/table-search-filter-demo/');

    await page.waitForTimeout(3000);

    const allcolomn=await page.locator('thead tr th');
    const colomnCount=await allcolomn.count();


    console.log("Total colomn count is",colomnCount);

    expect(colomnCount).toBe(8);
    
    const allrow=await page.locator('tbody tr');
    const rowCount=await allrow.count();

    console.log("Total row count is",rowCount);

    expect(rowCount).toBe(14);

});