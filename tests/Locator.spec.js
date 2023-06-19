//const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locator test',async({page})=>{
    await page.goto("https://demoblaze.com/index.html")

    //click on login button property
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //provide username css property
    //await page.locator('#loginusername').fill("arif343")
    await page.fill('#loginusername','arif123')
    //await page.type("#loginusername",'arif123')

    //provide password -css
    await page.fill("input[id='loginpassword']",'12345678')

    //click login button-- xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link --xpath
    const logoutLink = await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible()

    await page.close()



})