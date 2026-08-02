const{test,expect} = require("@playwright/test")

test("Valid Login",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin",{delay:200})

    await page.locator("input[name='password']").type("admin123",{delay:100})

    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click()

    await page.getByText("Logout").click()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL(/login/)

})