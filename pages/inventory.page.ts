import { Page, Locator, expect} from '@playwright/test';

export class InventoryPage {

    readonly page: Page;
    readonly titleText: Locator;
    readonly sortSelect: Locator;
    readonly addToCartButtons: Locator;
    readonly productDetails: Locator;

    constructor(page: Page){
        this.page = page;
        this.titleText = page.locator("xpath=//span[@class='title']");
        this.sortSelect = page.locator("xpath=//select[@data-test='product-sort-container']");
        this.addToCartButtons = page.locator("xpath=//button[text()='Add to cart']");
        this.productDetails = page.locator("xpath=//div[@class='inventory_item_name']");
    }

    async assertLoaded() {
        await expect(this.titleText).toHaveText('Products');
    }

    async assertProductDetailAndBackHome(n: number) {
        const inventoryUrl = "https://www.saucedemo.com/inventory.html";
        for (let i = 0; i < n; i++) {
            await this.productDetails.nth(i).click();
            let currentUrl = await this.page.url();
            await expect(currentUrl).not.toBe(inventoryUrl);
            await this.page.goBack();
            await expect(this.page).toHaveURL(inventoryUrl);
        }
    }

    async sortBy(option: 'az'|'za'|'lohi'|'hilo') {
        const valueMap = { az: 'az', za: 'za', lohi: 'lohi', hilo: 'hilo' };
        await this.sortSelect.selectOption(valueMap[option]);
    }

    async addProducts(n: number){
        for (let i = 0; i < n; i++) {
            await this.addToCartButtons.nth(i).click();
        }
    }

}