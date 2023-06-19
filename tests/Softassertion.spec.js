const {test,expect} = require('@playwright/test');

test('Soft Assertions',async({page})=>{
    await page.goto('https://demoblaze.com/index.html');

    //hgrd assertion
    // await expect(page).toHaveTitle('STORE123')
    // await expect(page).toHaveURL("https://demoblaze.com/index.html");
    // await expect(page.locator('.navbar-brand')).toBeVisible()

   
    //soft assertion
    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL("https://demoblaze.com/index.html");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()

    await page.close();


})