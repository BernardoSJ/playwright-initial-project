import { test, expect } from '@fixtures/auth.fixture';
import { CartPage } from '@pages/cart.page';

test.use({ userRole: 'standard_user'});

test.describe('Cart Module', () => {

    test('Add 2 Products and Verify Products Are Added', async ({inventory}) => {
        const cartPage = new CartPage(inventory.page);
        const products = await inventory.addProducts(2);
        cartPage.assertNumberOfProducts(2);
        cartPage.goToCart();

        const currentNames = await cartPage.getProductsNames();
        expect(currentNames).toEqual(products);
    });

});