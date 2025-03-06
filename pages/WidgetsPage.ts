import { Page, Locator, expect } from "@playwright/test";

export class WidgetsPage {
    readonly page: Page;
    readonly datePicker: Locator;
    readonly progressBar: Locator;
    readonly startButton: Locator;
    readonly slider: Locator;
    readonly toolTipButton: Locator;
    readonly toolTipText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.datePicker = page.locator("#datePickerMonthYearInput");
        this.progressBar = page.locator("#progressBar");
        this.startButton = page.locator("#startStopButton");
        this.slider = page.locator(".range-slider");
        this.toolTipButton = page.locator("#toolTipButton");
        this.toolTipText = page.locator(".tooltip-inner");
    }

    async navigate() {
        await this.page.goto("/widgets");
    }

    async selectDate(date: string) {
        await this.page.locator("#datePickerMonthYearInput").click();
        await this.page.waitForSelector(".react-datepicker", { state: "visible", timeout: 5000 });
        const [day, month, year] = date.split("/");
        await this.page.locator(".react-datepicker__year-select").selectOption(year);
        await this.page.locator(".react-datepicker__month-select").selectOption((parseInt(month) - 1).toString());
        await this.page.locator(`.react-datepicker__day--${day.padStart(3, "0")}:not(.react-datepicker__day--outside-month)`).click();
    }
     
    async startProgressBar() {
        await this.startButton.click();
        await expect(this.progressBar).toHaveText("100%");
    }

    async moveSlider(value: number) {
        await this.slider.fill(value.toString());
    }

    async validateTooltip() {
        await this.toolTipButton.hover();
        await expect(this.toolTipText).toBeVisible();
    }
}
