const {test,expect} = require('@playwright/test');

test('Checkbox',async({page})=>{
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    
   //single checkbox

    // await page.locator("//input[@id='monday' and @type='checkbox']").check()  /
    // //await page.check("//input[@id='male']")
    // await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()  
    // await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()  
  


    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy() 
    
    
                    
    const checkboxLocators =[
        "//input[@id='saturday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']"  
    ];

    for(const locator of checkboxLocators){          //select multiple elements
        await page.locator(locator).check()
    }
    
    await page.waitForTimeout(5000)   //pausiing code
    

    for(const locator of checkboxLocators){          //uncselect multiple elements
       
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck()
        }
      
    }
    

    
    await page.waitForTimeout(5000)   //pausiing code

    

    await page.close();


})