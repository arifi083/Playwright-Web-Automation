const {test,expect} = require('@playwright/test');

test('Hidden Dropdown',async({page})=>{
    await page.waitForTimeout(5000) 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000) 

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]").click()


    await page.waitForTimeout(5000) 

    
    const Options = await page.$$("//div[@role='listbox']//span")
    await page.waitForTimeout(3000) 

    for(let option of Options)
    {
        const value = await option.textContent()
        //console.log(value)
        if(value.includes('QA Engineer')){
            await option.click();
            await page.waitForTimeout(4000) 
            break;
        }
    }

  
    await page.waitForTimeout(5000) 
    await page.close();


})