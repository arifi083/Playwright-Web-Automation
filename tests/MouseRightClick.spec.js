const {test,expect} = require('@playwright/test');

test('Date Picker',async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
    await button.click({button:'right'})
  
    await page.waitForTimeout(5000) 
   
   



})
