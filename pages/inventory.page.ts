import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly titleText: Locator;
  readonly sortSelect: Locator;
  readonly addToCartButtons: Locator;
  readonly productDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleText = page.locator('.title');
    this.sortSelect = page.locator('[data-test="product-sort-container"]');
    this.addToCartButtons = page.getByRole('button', { name: 'Add to cart'});
    this.productDetails = page.locator('.inventory_item_name');
  }

  async assertLoaded() {
    await expect(this.titleText).toHaveText('Products');
  }

  async assertProductDetailAndBackHome(n: number) {
    const inventoryUrl = '/inventory.html';
    for (let i = 0; i < n; i++) {
      await this.productDetails.nth(i).click();
      let currentUrl = await this.page.url();
      await expect(currentUrl).not.toBe(new RegExp(`${inventoryUrl}$`));
      await this.page.goBack();
      await expect(this.page).toHaveURL(new RegExp(`${inventoryUrl}$`));
    }
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    const valueMap = { az: 'az', za: 'za', lohi: 'lohi', hilo: 'hilo' };
    await this.sortSelect.selectOption(valueMap[option]);
  }

  async addProducts(n: number): Promise<string[]> {
    let productsName:string[] = []
    for (let i = 0; i < n; i++) {
      await this.addToCartButtons.nth(i).click();
      productsName.push(await this.addToCartButtons.nth(i).locator('xpath=../../div[@class="inventory_item_name"]').innerText());
    }
    return productsName;
  }

  get productNames() { return this.productDetails; }
  get productPrices() { return this.page.locator('.inventory_item_price'); }

  async getNames(): Promise<string[]> {
    return await this.productNames.allTextContents();
  }

  async getPrices(): Promise<number[]> {
    const raw = await this.productPrices.allTextContents(); // ["$29.99", "$9.99", ...]
    return raw.map(t => Number(t.replace('$','')));
  }

}
