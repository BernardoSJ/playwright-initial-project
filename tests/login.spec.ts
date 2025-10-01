import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login Module', () => {
  test('Working With Standard Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Not Working With Locked User', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('locked_out_user', 'secret_sauce');
    await expect(login.errorMessage).toContainText('Sorry, this user has been locked out');
  });
});
