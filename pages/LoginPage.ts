import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly profileName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator("#userName");
        this.passwordField = page.locator("#password");
        this.loginButton = page.locator("#login");
        this.profileName = page.locator("#userName-value"); 
    }

    async navigate() {
        await this.page.goto("/login");
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async validateLogin() {
        await expect(this.profileName).toBeVisible();
    }
}
