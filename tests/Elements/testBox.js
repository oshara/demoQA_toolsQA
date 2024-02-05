import {test} from '@playwright/test';

export const TestBox = ()=>{

test('Test Box - Submitting the form',async({page})=>{

    await page.goto("https://demoqa.com/");
    await page.locator('//div[@class="category-cards"]/div[1]').click();
    await page.locator('(//li[@id="item-0"])[1]').click();
    await page.locator('#userName').fill('Sam');
    await page.locator('#userEmail').fill('test1@gmail.com');
    await page.locator('#currentAddress').fill("Main Street, NSW, Australia");
    await page.locator('[id="permanentAddress"]').fill('New Street, Melbourne, Australia');
    await page.locator('#submit').click();
})
}