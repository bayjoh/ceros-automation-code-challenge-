import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";

describe ('Swag Labs tests', () => {
    beforeAll(async () => {
        await swaglabsLoginPage.goto();
    });

    it('should display the meet Ceros info by default', async ()=> {
        await browser.sleep(1000);

        expect (await menuPage.sideBoxHeader.getText()).toEqual('Meet Ceros');
    });

    it('should have link to inspire information', async () => {
        await menuPage.inspireInfoLink.click();
        await browser.sleep(1000);

        expect (await menuPage.activeTab.getText()).toEqual('Get inspired');
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
