import { Page, Locator, expect } from "@playwright/test";

export class TablesPage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly ageField: Locator;
    readonly salaryField: Locator;
    readonly departmentField: Locator;
    readonly submitButton: Locator;
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.locator("#addNewRecordButton");
        this.firstNameField = page.locator("#firstName");
        this.lastNameField = page.locator("#lastName");
        this.emailField = page.locator("#userEmail");
        this.ageField = page.locator("#age");
        this.salaryField = page.locator("#salary");
        this.departmentField = page.locator("#department");
        this.submitButton = page.locator("#submit");
        this.tableRows = page.locator(".rt-tr-group");
    }

    async navigate() {
        await this.page.goto("/webtables");
        await this.page.waitForLoadState('domcontentloaded');
        await this.addButton.waitFor({ state: "visible", timeout: 15000 });
    }

    async addRecord(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
        await this.addButton.click();
        await this.firstNameField.waitFor({ state: "visible", timeout: 5000 });
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.emailField.fill(email);
        await this.ageField.fill(age);
        await this.salaryField.fill(salary);
        await this.departmentField.fill(department);
        await this.submitButton.click();
    }
    

    async validateRecordExists(firstName: string){
        const newRow = this.tableRows.filter({ hasText: firstName });
        await expect(newRow).toBeVisible({ timeout: 5000 });
    }
}
