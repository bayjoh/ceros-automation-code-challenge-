import { $, $$, ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {thankYou} from './thankYouPageSelectors';

class thankYouPage extends BasePage {
    constructor() {
        super();
        this.completeOrderText = $(thankYou.header);
        this.completeOrderImage = $(thankYou.image);
        this.goHomeButton =  $(thankYou.homeButton);
    }

}
export default new thankYouPage();