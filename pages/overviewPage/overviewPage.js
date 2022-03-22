import { $, $$, ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {overview} from './overviewPageSelectors';

class OverviewPage extends BasePage {
    constructor() {
        super();
        this.cartList = $$(overview.orderItemList);
        this.summaryInfo = $$(overview.summary);
        this.finishButton = $(overview.finishButton);
    }

}
export default new OverviewPage();
