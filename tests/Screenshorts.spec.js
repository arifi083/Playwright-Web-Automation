const {test,expect} = require('@playwright/test');


test.skip('Page Screen Shorts',async({page})=>{
    
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/Screnshorts/'+Date.now() +'HomePage.png'})

})



test.skip('Full Page Screen Shorts',async({page})=>{
    
    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path:'tests/Screnshorts/'+Date.now() +'FullPage.png',fullPage: true })

})



test('Element Screen Shorts',async({page})=>{
    
    await page.goto('https://demo.opencart.com/');
    await page.locator("//*[@id='content']/div[2]/div[1]/form/div").screenshot({path:'tests/Screnshorts/'+Date.now() +'Macbook.png'})

})


