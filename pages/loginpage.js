class LoginPage
{
    constructor(page) 
    {
        this.page = page;
        this.username = "#email1"
        this.password = "#password1"
        this.submitButton ="//button[normalize-space()='Sign in']"   
    }

    async loginToApp(username,password)
    {
        await this.page.fill(this.username,username)
        await this.page.fill(this.password,password)
        await this.page.click(this.submitButton)

    }

}
module.exports=LoginPage;