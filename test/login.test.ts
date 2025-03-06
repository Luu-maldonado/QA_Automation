import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login exitoso en DemoQA", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("testUser", "TestPass123!");
    await loginPage.validateLogin();
});
