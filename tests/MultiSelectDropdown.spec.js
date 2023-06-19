const {test,expect} = require('@playwright/test');

test('Multi Select Dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.selectOption("#colors",['Red','Blue','Yellow'])
   await page.selectOption('#colors', [{label: 'Red'}, {label: 'Green'}, {label: 'Blue'}])

    


    //1 Assertion check number of option in dropdown
    // const options = await page.locator("#colors option")
    // await expect(options).toHaveCount(5)
    

    //2 Check number of option in drop down in array
    // const options = await page.$$("#colors option")
    //console.log("number of option in dropdwon:",options.length)
    // await expect(options.length).toBe(5)


    //3. check presence of value in the dropdown
    const content = await page.locator("#colors").textContent()
   // await expect(content.includes('Blue')).toBeTruthy()
   await expect(content.includes('Black')).toBeFalsy()





   await page.waitForTimeout(5000)   //pausiing code
   await page.close();



})