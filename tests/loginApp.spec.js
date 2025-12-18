import { test, expect } from '@playwright/test';
const LoginPage= require("../pages/loginpage")
const HomePage= require("../pages/homePage")
const AddCourses= require("../pages/addCoursesPage")
const CartPage = require("../pages/cartPage")
const ManagePage= require("../pages/managePage")



test('Login To Application Using POM', async ({ page }) => {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginPage = new LoginPage(page)
    const homePage= new HomePage(page)
    const addCourses= new AddCourses(page)
    const cartPage = new CartPage(page)
    const manageButton = new ManagePage(page)


    await loginPage.loginToApp("admin@email.com","admin@123")

    
    await homePage.verifyManageOption()

    await page.waitForTimeout(3000)

    await addCourses.addItems()

    await page.waitForTimeout(3000)

    await cartPage.clickCart()

    await page.waitForTimeout(3000)

    await cartPage.checkCart()

    await page.waitForTimeout(3000)

    await manageButton.clickManageButton()

    await page.waitForTimeout(3000)
    
    await homePage.logoutFromApp()

    await page.pause()
    
    
})
