const {test,expect} = require('@playwright/test');


test('screenshort shwoing report',async({page})=>{
    
    await page.goto('https://demoblaze.com/index.html');

   //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('arif123')
    await page.locator('#loginpassword').fill('12345678')
    await page.locator("//button[normalize-space()='Log in']").click()

    await page.waitForTimeout(5000)
 
 

})


