
class CheckoutOverviewPage {

    constructor(page) {
        this.page = page;
        this.overviewTitle = page.getByText('Checkout: Overview', { exact: true });
        this.cartItem = page.locator('.cart_item');
        this.finishBtn = page.locator('#finish');
        this.inventoryItems = page.locator('.inventory_item_name');
    }

    async checkoutOverviewTitle() {
        return await this.overviewTitle.textContent();

    }
    async getInventoryItems() {
        return await this.inventoryItems.allTextContents();

    }

    async getInventoryItems(){
      return  await this.inventoryItems.allTextContents();
    }

    async navigateToCheckoutComplete(){
        await this.finishBtn.click();
        

    }
}
module.exports = { CheckoutOverviewPage };