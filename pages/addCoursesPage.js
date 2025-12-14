const {expect}=require("@playwright/test")

class AddCourses {
    constructor(page) {
        this.page = page
        this.addJava = "(//button[contains(text(),'Add to Cart')])[1]"
        this.addSelenium= "//div[@class='container-child']//div[2]//div[2]//button[1]"
        this.addSubramaniK= "body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > button:nth-child(6)"
        
    }

    async addItems() {
        await this.page.click(this.addJava);
        await this.page.click(this.addSelenium);
        await this.page.click(this.addSubramaniK);
        
    }
}
module.exports=AddCourses