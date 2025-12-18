class ManagePage {
    constructor(page) {
        this.page = page
        this.manageoption="//span[normalize-space()='Manage']"
    }



    async clickManageButton() {
        this.page.click(this.manageoption)
    }
}