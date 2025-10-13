import { test, expect } from '@fixtures/auth.fixture';
import { CartPage } from '@pages/cart.page';
import { CheckoutPage } from '@pages/checkout.page';
import { buildCustomer } from '@utils/dataBuilder';

test.describe("@checkout Checkout Module", () => {

    test("Happy Checkout", async ({inventory}) => {
        const cartPage = new CartPage(inventory.page);
        const checkOutPage = new CheckoutPage(inventory.page);
        const customer = buildCustomer()
        await inventory.addProductsWithoutList(1);
        await cartPage.goToCart();
        await cartPage.proceedToCheckout();

        await checkOutPage.fillCheckoutDetails(customer.firstName, customer.lastName, customer.zip);
        await checkOutPage.clickFinishButton();
        await checkOutPage.assertCheckoutComplete();
    });

});