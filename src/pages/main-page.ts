import { BasePage } from "./base-page";
import { Locator, Page } from "@playwright/test";

export default class MainPage extends BasePage {
    readonly topPageHeader: Locator;
    readonly availableExamplesHeader: Locator;
    readonly pageLinks: Locator;

    constructor(page: Page) {
        super(page);

        this.topPageHeader = this.page.locator('h1.heading');
        this.availableExamplesHeader = this.page.locator('h2');
        this.pageLinks = this.page.locator('ul > li > a');
    }

    public async getTopPageHeader(): Promise<string> {
        return await this.topPageHeader.innerText();
    }
}