const { test, expect } = require('../Fixtures/customFixtures');
const { POManager } = require('../PageObjects/POManager');


let poManager;
let productPage;
let product = 'Sauce Labs Bike Light';
let cartPage;

test.beforeEach('before test', async ({ page }) => {
    poManager = new POManager(page);
    productPage = poManager.getProductPage();
    cartPage = poManager.getCartPage();

})

test('Inventory loads after login', async ({ page, loginPage }) => {
    await expect(page.locator('.inventory_item')).toBeVisible();
});

test('Verify title', async ({ page, loginPage }) => {
    const title = await productPage.getPageTitle();
    expect(title).toContain('Swag Labs');

})


test('verify sort by', async ({ page, loginPage }) => {
    await productPage.sortBy('Price (low to high)');
    await expect(page.locator('[data-test="inventory-item-name"]').first()).toHaveText('Sauce Labs Onesie');
})

test('Verify sorting order', async ({ page, loginPage }) => {
    await productPage.sortBy('Price (low to high)');
    const prices = await productPage.ProductPrice();
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);

    }

})


test('select product and add to cart', async ({ page, loginPage }) => {
    await productPage.selectProductAddToCart(product);
})

test('click on cart icon', async ({ page, loginPage }) => {
    await productPage.goToCart();
    const CartTitle = await cartPage.getCartTitle();
    expect(CartTitle).toContain('Your Cart');
})

