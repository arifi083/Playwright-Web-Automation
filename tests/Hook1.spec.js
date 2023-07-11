const {test,expect} = require('@playwright/test');


test('Home Page Test',async({page})=>{
    
    await page.goto('https://demoblaze.com/index.html');

   //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('arif123')
    await page.locator('#loginpassword').fill('12345678')
    await page.locator("//button[normalize-space()='Log in']").click()

    await page.waitForTimeout(5000)
   //Homepage 
   const products = await page.$$('.hrefch')
   expect(products).toHaveLength(9)
  
   //logout
   await page.locator('#logout2').click();
   await page.waitForTimeout(5000) 
 

})



test('Add Product To Cart Test',async({page})=>{
    await page.waitForTimeout(5000) 
    
    await page.goto('https://demoblaze.com/index.html');

   //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('arif123')
    await page.locator('#loginpassword').fill('12345678')
    await page.locator("//button[normalize-space()='Log in']").click()

    await page.waitForTimeout(5000)
   //Add product to cart
   await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
   await page.locator("//a[normalize-space()='Add to cart']").click();

   page.on('dialog',async dialog=>{

       expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
   })

  
   //logout
   await page.locator('#logout2').click();
   await page.waitForTimeout(5000) 
   await page.close();

})