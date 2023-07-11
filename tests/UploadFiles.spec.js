const {test,expect} = require('@playwright/test');


test.skip('Single File',async({page})=>{
    await page.goto('https://www.foundit.in/');
    await page.waitForTimeout(5000) 

    await page.locator('.mqfihd-upload').click()
    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/Resume_Md_Arif_Miah_SQA.pdf')
    
    await page.waitForTimeout(5000) 
})




test('Multiple File',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/Resume_Md_Arif_Miah_SQA.pdf',
                                                      'tests/uploadFiles/Samsul.pdf']);

    await page.waitForTimeout(5000)  
    expect(await page.locator('#fileList li:nth-last-child(2)')).toHaveText('Resume_Md_Arif_Miah_SQA.pdf')
    expect(await page.locator('#fileList li:nth-last-child(1)')).toHaveText('Samsul.pdf')
                                                   

    await page.waitForTimeout(3000)

    //reomving files
    await page.locator('#filesToUpload').setInputFiles([]);
    expect(await page.locator("//li[normalize-space()='No Files Selected']")).toHaveText('No Files Selected')


    // await page.waitForTimeout(3000)


})
