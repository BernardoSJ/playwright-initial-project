import { Page, Locator, expect} from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly userTextBox: Locator;
    readonly passTextBox: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.userTextBox = page.locator("xpath=//input[@id='user-name']");
        this.passTextBox = page.locator("xpath=//input[@id='password']");
        this.loginButton = page.locator("xpath=//input[@type='submit']");
        this.errorMessage = page.locator("xpath=//div[contains(@class,'error-message-container')]");
    }

    async goto() {
        await this.page.goto('/');
        await expect(this.userTextBox).toBeVisible();
    }

    async login(username: string, password: string) {
        await this.userTextBox.fill(username);
        await this.passTextBox.fill(password);
        await this.loginButton.click();
    }

}