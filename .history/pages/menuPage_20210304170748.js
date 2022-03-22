import BasePage from './basePage';

class MenuPage extends BasePage {
    constructor() {
        super();
        this.secondaryMenu = $('.secondary-menu');
        this.menuButton = $('button.secondary-menu-btn');
        this.sideBoxHeader = $('.tab-pane-side-box h4');
        this.url = "https://ceros.com/inspire";
    }
}
export default new MenuPage();