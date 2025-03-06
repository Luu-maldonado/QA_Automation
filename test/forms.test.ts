import { test, expect } from "@playwright/test";
import { FormsPage } from "../pages/FormsPage";

test("Registro exitoso en formulario de DemoQA", async ({ page }) => {
    const formsPage = new FormsPage(page);

    await formsPage.navigate();
    await formsPage.fillForm();
    await formsPage.submitForm();
    await formsPage.validateSubmission();
});
