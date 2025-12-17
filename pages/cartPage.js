const {expect}=require("@playwright/test")


class CartPage {
    constructor(page) {
        this.page = page
        this.cartMenu = `:text-is("Cart")`
        this.totalPriceH1 = "//div[@class='container-child']//h3[1]"
    }

    async clickCart() {
        await this.page.click(this.cartMenu);
        
    }

    async checkCart() {
        
        await expect(this.page.locator(this.totalPriceH1)).toBeVisible()
        
    }
}
module.exports=CartPage