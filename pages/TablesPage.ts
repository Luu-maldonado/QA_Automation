import { Page, Locator, expect } from "@playwright/test";

export class TablesPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly submitButton: Locator;
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator("#addNewRecordButton");
        this.firstNameField = page.locator("#firstName");
        this.lastNameField = page.locator("#lastName");
        this.emailField = page.locator("#userEmail");
        this.submitButton = page.locator("#submit");
        this.tableRows = page.locator(".rt-tr-group");
    }

    async navigate() {
        await this.page.goto("/webtables");
    }

    async addRecord(firstName: string, lastName: string, email: string) {
        await this.addButton.click();
        await this.firstNameField.waitFor({ state: "visible", timeout: 5000 });
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.submitButton.click();
    }

    async validateRecordExists(){
        await this.page.waitForTimeout(3000);
        const newRow = this.page.locator(".rt-tr-group").filter({ hasText: "Juan" });
        await expect(newRow).toBeVisible({ timeout: 5000 });
    }
    
    
}
