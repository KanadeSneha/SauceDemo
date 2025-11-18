
class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.checkoutTitle = page.getByText('Checkout: Your Information', { exact: true });
        this.firstname = page.locator('#first-name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.postalcode = page.locator('[data-test="postalCode"]');
        this.continueBtn = page.locator('#continue');
       
    }

     getCheckoutTitle() {
        return  this.checkoutTitle.textContent();
    }

    async entercheckoutinfo(){
        await this.firstname.fill("a");
        await this.lastname.fill("b");
        await this.postalcode.fill("c");
        await this.continueBtn.click();
    }

    
}
module.exports = { CheckoutPage }