const {test,expect} = require('@playwright/test');

test('Auto Suggestion Dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
    const fromOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromOptions)
    {
        const value = await option.textContent()
        //console.log(value)
        if(value.includes('Dhaula Kuan')){
            await option.click();
            break;
        }
    }

  
    await page.waitForTimeout(5000) 
    await page.close();


})