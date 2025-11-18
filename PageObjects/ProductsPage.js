// const {POManager} = require('../PageObjects/POManager');

class ProductsPage {

    constructor(page) {
        this.page = page;
        this.productTitle = page.locator('.title');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.allPrices = page.locator('.inventory_item_price');
        this.inventoryItems = page.locator('.inventory_item');
        this.item = page.locator('.inventory_item_name');

    }

    async ProductsTitle() {
        return this.productTitle;

    }

async getPageTitle() {
    return await this.page.title();
}

    async sortBy(option) {
        await this.sortDropdown.selectOption(option);
    }

    async ProductPrice() {
        const prices = await this.allPrices.allTextContents();
        return (prices.map(p => parseFloat(p.replace('$', ''))));

    }

    async selectProductAddToCart(product) {
        const product1 = this.page.locator('.inventory_item').filter({
            has: this.page.locator('.inventory_item_name', { hasText: product })
        });

        await product1.locator('button').click();
    }


}
module.exports = { ProductsPage };