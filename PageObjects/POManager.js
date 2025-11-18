const {LoginPage} = require ('../PageObjects/LoginPage');
const {ProductsPage} = require('../PageObjects/ProductsPage');

class POManager{

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.productPage = new ProductsPage(this.page);

    }

     getLoginPage(){
        return  this.loginPage;
    }

    getProductPage(){
        return this.productPage;
    }

}

module.exports = {POManager}