import BasePage from './basePage';

class MenuPage extends BasePage {
    constructor() {
        super();
        this.secondaryMenu = $('.secondary-menu');
        this.menuButton = $('button.secondary-menu-btn');
        this.sideBoxHeader = $('.tab-pane-side-box h4');
        this.url = "https://ceros.com/inspire";
        this.headerLogo = $('img[src="/inspire/assets/img/ceros-inspire-light-logo.svg"]');
        this.inspireInfoLink = $('li.owl-nav-item[data-target="1"]');
        this.educateInfoLink = $('li.owl-nav-item[data-target="2"]');
        this.originalsInfoLink = $('li.owl-nav-item[data-target="3"]');
        this.resourcesInfoLink = $('li.owl-nav-item[data-target="4"]');
        this.activeTab = $('.owl-item + .active .tab-pane-side-box > h4');
        this.pageLoaded = this.isVisible(this.headerLogo);
    }
}
export default new MenuPage();