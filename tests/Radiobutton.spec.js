const {test,expect} = require('@playwright/test');

test('Radio Buttoon',async({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    
    await page.locator("//input[@id='male']").check()  // male check hbe
    //await page.check("//input[@id='male']")
    await expect(await page.locator("//input[@id='male']")).toBeChecked()  // check hoyse ki n a dekabe
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy()   // check hle true and true compare krbe
  


    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy()   // Female check hoyse ki na dekbe
    await page.waitForTimeout(5000)   //pausiing code
    

    await page.close();


})