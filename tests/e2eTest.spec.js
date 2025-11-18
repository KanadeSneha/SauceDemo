const { test, expect } = require('../Fixtures/customFixtures');
const { POManager } = require('../PageObjects/POManager');

let poManager;
let productPage;
let cartPage;
let checkoutPage;
let checkoutOverviewPage;
let checkoutCompletePage;
let product1 = "Sauce Labs Bolt T-Shirt";
let product2 = "Sauce Labs Fleece Jacket";

test.beforeEach('steup', async ({ page, loginPage }) => {
    poManager = new POManager(page);
    productPage = poManager.getProductPage();
    cartPage = poManager.getCartPage();
    checkoutPage = poManager.getCheckoutPage();
    checkoutOverviewPage = poManager.getCheckoutOverviewPage();
    checkoutCompletePage = poManager.getCheckoutCompletePage();

})

test('e2e test', async ({ page, loginPage }) => {
    //product page
    await productPage.selectProductAddToCart(product1);
    await productPage.selectProductAddToCart(product2);
    await productPage.goToCart();
    //cart page
    const cartTitle = await cartPage.getCartTitle();
    expect(cartTitle).toContain('Your Cart');
    const cartList = await cartPage.getCartItems();
    expect(cartList).toContain(product1);
    expect(cartList).toContain(product2);
    expect(cartList.length).toBe(2);
    await cartPage.ClickChekout();
    //checkout page
    const checkoutTitle = await checkoutPage.getCheckoutTitle();
    expect(checkoutTitle).toContain("Checkout: Your Information");
    await checkoutPage.entercheckoutinfo();

    //checkout overview page
    const overviewTitle = await checkoutOverviewPage.checkoutOverviewTitle();
    expect(overviewTitle).toContain('Checkout: Overview');
    const inventoryItems = await checkoutOverviewPage.getInventoryItems();
    expect(inventoryItems).toContain(product1);
    expect(inventoryItems).toContain(product2);
    expect(inventoryItems.length).toBe(2);
    await checkoutOverviewPage.navigateToCheckoutComplete();
    //checkout complete page
   const completePageTitle = await checkoutCompletePage.getCompletePageTitle();
    expect(completePageTitle).toContain('Checkout: Complete!');
    const thankyouTitle = await checkoutCompletePage.verifyThankyouTitle();
    expect(thankyouTitle).toContain('Thank you for your order!');
})