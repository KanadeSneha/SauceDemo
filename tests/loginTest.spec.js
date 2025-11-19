const { test, expect } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');

let poManager;
let loginPage;
let productPage;

test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
    loginPage = poManager.getLoginPage();

    await loginPage.navigate();
    productPage = poManager.getProductPage();
})

test('Validate Successful Login', async ({ page }) => {
    await loginPage.Login('standard_user', 'secret_sauce');
    const productTitle = await productPage.ProductsTitle();
    expect(productTitle).toContainText('Products');
})

test('Validate Login With Invalid Credentials', async ({page})=>{
    await loginPage.Login('invalid_user', 'wrong_password');
   const errormessage =  await loginPage.getError();
    expect(errormessage).toContain('Epic sadface: Username and password do not match any user in this service');

})

test('Validate Login With Empty Fields', async ( {page}) => {
    await loginPage.Login('', '');
    const errormessage = await loginPage.getError();
    expect(errormessage).toContain('Epic sadface: Username is required');


})

