const { test, expect } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');
const users = require('../TestData/testDataLogin.json');


let poManager;
let loginPage;
let productPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();

    await loginPage.navigate();
    productPage = poManager.getProductPage();
})

users.forEach(user=>{
    test(`login test: ${user.type}`, async ({ page }) => {
    await loginPage.Login(user.username, user.password);
    const productTitle = await productPage.ProductsTitle();
    // expect(productTitle).toContainText('Products');
        if (user.type === 'valid') {
      await expect(productTitle).toContainText('Products');
    } else {
      const error = await loginPage.getErrorMessage();
      expect(error).toBeTruthy();
    }
})
})

// test('Validate Successful Login', async ({ page }) => {
//     await loginPage.Login('standard_user', 'secret_sauce');
//     const productTitle = await productPage.ProductsTitle();
//     expect(productTitle).toContainText('Products');
// })

// test('Validate Login With Invalid Credentials', async ({page})=>{
//     await loginPage.Login('invalid_user', 'wrong_password');
//    const errormessage =  await loginPage.getError();
//     expect(errormessage).toContain('Epic sadface: Username and password do not match any user in this service');

// })

// test('Validate Login With Empty Fields', async ( {page}) => {
//     await loginPage.Login('', '');
//     const errormessage = await loginPage.getError();
//     expect(errormessage).toContain('Epic sadface: Username is required');


// })

