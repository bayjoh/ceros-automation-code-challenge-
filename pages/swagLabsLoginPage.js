import BasePage from './basePage';

class SwaglabsLoginPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com";
    }
}
export default new SwaglabsLoginPage();