const {test,expect} = require('@playwright/test');

test('Assertions',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");



    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    const logoElement =await page.locator(".header-logo")
    await expect(logoElement).toBeVisible()

    const searchBox = await page.locator("#small-searchterms")
    await expect(searchBox).toBeEnabled()

    //radio button
    const maleRadioButton = await page.locator("#gender-male")
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    //checkbox
    const newsLetterCheckBox = await page.locator("#Newsletter")
    await expect(newsLetterCheckBox).toBeChecked()

    const registerBtn = await page.locator("#register-button")
    await expect(registerBtn).toHaveAttribute('type','submit')


    await expect(await page.locator(".page-title h1")).toHaveText("Register")   //Full match
    await expect(await page.locator(".page-title h1")).toContainText("Regis")   //partial match


    const emailInput = await page.locator("#Email")
    await emailInput.fill("arif@gmail.com")
    await expect(emailInput).toHaveValue("arif@gmail.com")
    


    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13)



    await page.close();


})