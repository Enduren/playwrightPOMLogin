const {expect}=require("@playwright/test")

class AddCourses {
    constructor(page) {
        this.page = page
        this.addJava = "(//button[contains(text(),'Add to Cart')])[1]"
        this.addSelenium= "//div[@class='container-child']//div[2]//div[2]//button[1]"
        this.addSubramaniK= `//*[@id="root"]/div/div[2]/div/div/div[3]/div[2]/button`
        
    }

    async addItems() {
        await this.page.click(this.addJava);
        await this.page.click(this.addSelenium);
        await this.page.click(this.addSubramaniK);
        
    }
}
module.exports=AddCourses