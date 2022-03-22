import { ExpectedConditions } from 'protractor';
import BasePage from '../basePage';
import {login} from './loginPageSelectors';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com";
        this.inputUserName = $(login.userNameField);
        this.inputPassword = $(login.passwordField);
        this.loginButton = $(login.loginButton);
        this.pageLoaded = this.isVisible(this.loginButton);

    }

    async loginUser(username,password){
       
        await this.inputUserName.sendKeys(username);
        await this.inputPassword.sendKeys(password);
        await this.hitEnter();
    }
}
export default new LoginPage();