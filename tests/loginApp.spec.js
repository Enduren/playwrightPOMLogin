import { test, expect } from '@playwright/test';
const LoginPage= require("../pages/loginpage")
const HomePage= require("../pages/homePage")



test('Login To Application Using POM', async ({ page }) => {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)
    const homePage= new HomePage(page)

    await loginPage.loginToApp("admin@email.com","admin@123")

    
    homePage.verifyManageOption()

    await page.waitForTimeout(3000)
    
    await homePage.logoutFromApp()
    await page.pause()
    
    
})
