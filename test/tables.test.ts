import { test } from "@playwright/test";
import { TablesPage } from "../pages/TablesPage";

test("Agregar, editar y eliminar un registro en la tabla", async ({ page }) => {
    const tablesPage = new TablesPage(page);

    await tablesPage.navigate();

    // Agregar nuevo registro
    await tablesPage.addRecord("Juan", "Pérez", "juanperez@test.com");

    // Validar que el registro fue agregado
    await tablesPage.validateRecordExists();
});
