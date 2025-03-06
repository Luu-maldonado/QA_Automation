import { test } from "@playwright/test";
import { WidgetsPage } from "../pages/WidgetsPage";

test("Interacción con Widgets en DemoQA", async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);

    await widgetsPage.navigate();
    
    // Seleccionar fecha en Date Picker
    await widgetsPage.selectDate("10/08/1995");

    // Iniciar la barra de progreso y esperar a 100%
    await widgetsPage.startProgressBar();

    // Mover el slider al 75%
    await widgetsPage.moveSlider(75);

    // Validar el tooltip
    await widgetsPage.validateTooltip();
});
