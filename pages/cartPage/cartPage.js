import { $, $$, ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {cart} from './cartPageSelectors';

class CartPage extends BasePage {
    constructor() {
        super();
        this.cartItems = $$(cart.cartItemList);
        this.checkoutButton = $$(cart.checkoutButton);
    }

}
export default new CartPage();