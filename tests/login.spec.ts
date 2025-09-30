import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Module', () => {

    test("Working with standard credentials", async ({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.login('standard_user', 'secret_sauce');
        await expect(page.locator('.title')).toHaveText('Products');
    });

});