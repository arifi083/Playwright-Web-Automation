const {test,expect} = require('@playwright/test');

test('Built In Locator',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //getByAltText
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //getByPlaceHolder
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill('admin123')
    
    //getByRole
    await page.getByRole('button',{type:'submit'}).click()

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(name)).toBeVisible()

})