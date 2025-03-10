import { test } from "@playwright/test";
import { WidgetsPage } from "../pages/WidgetsPage";

test("Interacción con Widgets en DemoQA", async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.navigateToWidgets();

    await widgetsPage.openWidget('Date Picker');
    await widgetsPage.selectDate("10/08/1995");

    await widgetsPage.openWidget('Progress Bar');
    await widgetsPage.startProgressBar();

    await widgetsPage.openWidget('Slider');
    await widgetsPage.moveSlider(75);

    await widgetsPage.openWidget('Tool Tips');
    await widgetsPage.validateTooltip();
});
