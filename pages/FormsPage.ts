import { Page, Locator, expect } from "@playwright/test";

export class FormsPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly gender: Locator;
    readonly phone: Locator;
    readonly submitButton: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator("#firstName");
        this.lastName = page.locator("#lastName");
        this.email = page.locator("#userEmail");
        this.gender = page.locator("input[name='gender'][value='Male']");
        this.phone = page.locator("#userNumber");
        this.submitButton = page.locator("#submit");
        this.confirmationMessage = page.locator(".modal-content");
    }

    async navigate() {
        await this.page.goto("/automation-practice-form");
    }

    async fillForm() {
        await this.firstName.fill("Juan");
        await this.lastName.fill("Pérez");
        await this.email.fill("juanperez@test.com");
            try {
                // Intentar hacer clic en el label
                await this.page.locator("label[for='gender-radio-1']").click();
            } catch (error) {
                // Si falla, hacer check en el radio button con force:true
                await this.gender.check({ force: true });
            }
        await this.phone.fill("1234567890");
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async validateSubmission() {
        await expect(this.confirmationMessage).toBeVisible();
    }
}
