
class CheckoutCompletePage {

    constructor(page) {
        this.page = page;
        this.completeTitle = page.getByText('Checkout: Complete!', { exact: true });
        this.ThankyouTitle = page.getByText('Thank you for your order!', { exact: true });
        this.backHomeBtn = page.locator('#back-to-products');

    }

    async getCompletePageTitle() {
        return await this.completeTitle.textContent();
    }

    async verifyThankyouTitle() {
        return await this.ThankyouTitle.textContent();
    }

}
module.exports = { CheckoutCompletePage };