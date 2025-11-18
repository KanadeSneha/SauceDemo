const {LoginPage} = require ('../PageObjects/LoginPage');
const {ProductsPage} = require('../PageObjects/ProductsPage');
const {CartPage} = require('../PageObjects/CartPage');
const {CheckoutPage} = require('../PageObjects/CheckoutPage')
const {CheckoutOverviewPage} = require('../PageObjects/CheckoutOverviewPage');
const {CheckoutCompletePage} = require('../PageObjects/CheckoutCompletePage');

class POManager{

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.productPage = new ProductsPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.checkoutOverviewPage = new CheckoutOverviewPage(this.page);
        this.checkoutCompletePage = new CheckoutCompletePage(this.page);

    }

     getLoginPage(){
        return  this.loginPage;
    }

    getProductPage(){
        return this.productPage;
    }

    getCartPage(){
        return this.cartPage;
    }
    getCheckoutPage(){
        return this.checkoutPage;
    }

    getCheckoutOverviewPage(){
        return this.checkoutOverviewPage;
    }

    getCheckoutCompletePage(){
        return this.checkoutCompletePage;
    }

}

module.exports = {POManager}