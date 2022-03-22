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
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
    });

    it('sort the inventory items by name, Z-to-A', async () => {
    });


})
