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

test('login', async ({page }) => {
await loginPage.Login('standard_user', 'secret_sauce');
    const productTitle = await productPage.ProductsTitle();
    expect(productTitle).toContainText('Products');
})
