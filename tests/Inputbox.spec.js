const {test,expect} = require('@playwright/test');

test('Handle Inputbox',async({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    
    await expect(await page.locator("//input[@id='name']")).toBeVisible()
    await expect(await page.locator("//input[@id='name']")).toBeEmpty()
    await expect(await page.locator("//input[@id='name']")).toBeEditable()
    await expect(await page.locator("//input[@id='name']")).toBeEnabled()

    await page.locator("//input[@id='name']").fill("arif islam")

    await page.waitForTimeout(5000)   //pausiing code



    await page.close();


})