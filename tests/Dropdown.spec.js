const {test,expect} = require('@playwright/test');

test('Drop Down',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator("#country").selectOption({label:'India'})  //label visible text
    //await page.locator("#country").selectOption('India')  // visible text
    // await page.locator("#country").selectOption({value:'uk'})  // value
     //await page.locator("#country").selectOption({index:2})   //index
     //await page.selectOption("#country","India")


    //assertion
    // 1. check number of option in dropdown
   //const options = await page.locator("#country option")
// await expect(options).toHaveCount(10)



  // 2. Check number of option in dropdown
    //const options = await page.$$("#country option")
    //console.log("number of option:",options.length)
   // await expect(options.length).toBe(10)


    //3 check presence of value in the dropdown
    // const content = await page.locator("#country").textContent()
    // await expect(content.includes("India")).toBeTruthy()
    // await expect(content.includes("XYZ")).toBeTruthy()   //Assertion fail


    //4 check the presen of value in drop down using loop
    /*
    const options = await page.$$("#country option")
    let status = false
    for(const option of options){
      //console.log(await option.textContent())
      let value = await option.textContent()
      if(value.includes('France')){
        status = true
        break
      }
    }
    expect(status).toBeTruthy()
   */
  

  //5. select option from dropdown using loop
  const options1 = await page.$$("#country option")
  for(const option of options1){
    let value = await option.textContent()
    if(value.includes('France')){
      await page.selectOption("#country",value)
      break
    }
  }








    await page.waitForTimeout(5000)   //pausiing code
    await page.close();


})