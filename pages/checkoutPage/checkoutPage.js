import { $, $$, ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {checkout} from './checkoutPageSelectors';

class CheckoutPage extends BasePage {
    constructor() {
        super();
        this.inputFirstName = $(checkout.firstNameField);
        this.inputLastName = $(checkout.lastNameField);
        this.inputPostalCode = $(checkout.postalCodeField);
        this.continueButton = $(checkout.continueButton);
    }

    async submitCheckOutForm(firstName,lastName,postalCode){
       
        await this.inputFirstName.sendKeys(firstName);
        await this.inputLastName.sendKeys(lastName);
        await this.inputPostalCode.sendKeys(postalCode);
        await this.continueButton.click();
    }

}
export default new CheckoutPage();