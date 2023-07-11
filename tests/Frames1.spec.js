const {test,expect} = require('@playwright/test');



test('Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

   //total frames
   const allFrames = await page.frames()
   console.log("number of frames:",allFrames.length)

   //aproach 1  using name or url
   //const pageName = await page.frame('name')  if name iss availabe
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
   await frame1.fill("input[name='mytext1']",'Hello');


   //approach 2
//    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
//    inputBox.fill("hello")

   await page.waitForTimeout(5000)   //pausiing code
   await page.close();
  
})




test.skip('Inner Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');


    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //await frame3.locator("input[name='mytext3']").fill('Welcome')

    //nested frames
    const chiledFrames = await frame3.childFrames()
    await chiledFrames[0].locator("//*[@id='i5']/div[3]/div").check()




   await page.waitForTimeout(5000)   //pausiing code
   await page.close();

})