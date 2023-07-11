const {test,expect} = require('@playwright/test');


test.beforeAll(async()=>{
    console.log("this is beforeAll hook......")
})

test.afterAll(async()=>{
    console.log("this is afterAll hook......")
})

test.beforeEach(async()=>{
    console.log("this is beforeEach hook......")
})

test.afterEach(async()=>{
    console.log("this is afterEach hook......")
})





test.describe.only('Group 1',()=>{

    test('Test 1',async()=>{
        console.log("test 1")
    })
    
    test('Test 2',async()=>{
        console.log("test 2")
    })
    

})

test.describe('Group 2',()=>{
    
test('Test 3',async()=>{
    console.log("test 3")
})

test('Test 4',async()=>{
    console.log("test 4")
})

})


