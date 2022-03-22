import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";

describe ('Swag Labs tests', () => {
    beforeAll(async () => {
        await swaglabsLoginPage.goto();
    });

    it('should log in with standard user', async ()=> {
    });

    it('should add an item to the cart', async () => {
    });

    it('should have 6 items on the inventory page', async () => {
    });

    it('should complete the purchase process of an item from the inventory', async () => {
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
