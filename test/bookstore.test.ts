import { test } from "@playwright/test";
import { BookStorePage } from "../pages/BookstorePage";

test("Buscar y agregar un libro a la colección", async ({ page }) => {
    const bookStorePage = new BookStorePage(page);

    await bookStorePage.navigate();

    // Buscar libro
    await bookStorePage.searchBook("Git Pocket Guide");

    // Agregar libro a la colección
    await bookStorePage.addBookToCollection();

    // Validar que está en la colección
    await bookStorePage.validateBookInProfile();
});
