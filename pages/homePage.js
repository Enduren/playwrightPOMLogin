// homePage.js (Refactored)
const {expect}=require("@playwright/test")

class HomePage {
    constructor(page) {
        this.page = page;
        // Best practice: Use page.locator() to define locators
        this.locatorPageTitle = "//button[normalize-space()='Cart']";
        this.manageoption="//span[normalize-space()='Manage']"
        this.menu = "//img[@alt='menu']"; 
        this.logoutoption = "//button[normalize-space()='Sign out']";
    }

    // Method to return the locator for assertion in the test file
    getPageTitleLocator() {
        return this.locatorPageTitle;
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }



    async logoutFromApp() {
        // Only actions here
        await this.page.click(this.menu);
        await this.page.click(this.logoutoption);
    }
}

module.exports = HomePage;