import { Page, Locator, expect } from "@playwright/test";

export class BookStorePage {
    readonly page: Page;
    readonly searchField: Locator;
    readonly bookTitle: Locator;
    readonly addButton: Locator;
    readonly profileTab: Locator;
    readonly bookInProfile: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator("#searchBox");
        this.bookTitle = page.locator(".rt-tr-group");
        this.addButton = page.locator("text='Add To Your Collection'");
        this.profileTab = page.locator("text='Profile'");
        this.bookInProfile = page.locator(".rt-tr-group");
    }

    async navigate() {
        await this.page.goto("/books");
    }

    async searchBook(bookName: string) {
        await this.searchField.fill(bookName);
    }

    async addBookToCollection() {
        await this.addButton.click();
    }

    async validateBookInProfile() {
        await this.profileTab.click();
        await expect(this.bookInProfile).toContainText("Git Pocket Guide");
    }
}
