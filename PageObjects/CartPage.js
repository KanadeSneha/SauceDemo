class CartPage{

    constructor(page){
        this.page = page;
        this.cartTitle = page.locator('span:has-text("Your Cart")');
        this.cartList = page.locator('.inventory_item_name');
        this.checkoutBtn = page.locator('[data-test="checkout"]');
    }

    getCartTitle(){
        return this.cartTitle.textContent();
    }

    async ClickChekout(){
        await this.checkoutBtn.click();
    }

    async getCartItems(){
        return await this.cartList.allTextContents();
        
    }
 
   
}
module.exports = {CartPage};