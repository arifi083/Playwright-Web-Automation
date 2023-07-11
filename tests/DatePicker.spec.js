const {test,expect} = require('@playwright/test');

test('Date Picker',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
  
     
    //date picker 

    const expectDate ='20'
    const month ='March'
    const year ='2024'

    await page.click('#datepicker');

    while(true){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth =await page.locator('.ui-datepicker-month').textContent();
        console.log(currentMonth,currentYear)

        if(currentMonth==month && currentYear==year){
            break;
        }

        await page.locator("[title='Next']").click();
    }

    const dates = await page.$$("//a[@class='ui-state-default']")
 
    /*
    for(const dt of dates){
        if(await dt.textContent()==expectDate){
            await dt.click();
            await page.waitForTimeout(5000) 
            break;
        }
    }

    */

    await page.click(`//a[@class='ui-state-default'][text()='${expectDate}']`)

   


    await page.waitForTimeout(5000) 
    await page.close();


})
