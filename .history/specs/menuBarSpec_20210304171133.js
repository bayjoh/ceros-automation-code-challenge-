import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";

describe ('Swag Labs tests', () => {
    beforeAll(async () => {
        await swaglabsLoginPage.goto();
    });

    it('should log in with standard user', async ()=> {
    });

    it('should add an item to the cart', async () => {
    });

    it('should have link to educate information', async () => {
        await menuPage.educateInfoLink.click();
        await browser.sleep(1000);

        expect (await menuPage.activeTab.getText()).toEqual('Start Learning');
    });

    it('should have link to originals information', async () => {
        await menuPage.originalsInfoLink.click();
        await browser.sleep(1000);

        expect (await menuPage.activeTab.getText()).toEqual('Stay Original');
    });

    it('should have link to resources information', async () => {
        await menuPage.resourcesInfoLink.click();
        await browser.sleep(1000);

        expect (await menuPage.activeTab.getText()).toEqual('Empower Change');
    });
})
