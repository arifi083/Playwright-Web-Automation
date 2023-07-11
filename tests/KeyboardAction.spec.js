const {test,expect} = require('@playwright/test');

test('Drag And Drop',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');


    //await page.locator("[name='text1']").fill("Welcome to automation")
    await page.type("[name='text1']","Welcome to Automation")

    //Ctrl + A  select the text
    await page.keyboard.press('Control+A')

    //ctrl + c copy the text
    await page.keyboard.press('Control+C')

    //Tab
     await page.keyboard.down('Tab')
     await page.keyboard.up('Tab')

    // ctrl +v pest the text
    await page.keyboard.press('Control+V')
  

    
    await page.waitForTimeout(5000) 
    await page.close();

 
    

   


})
