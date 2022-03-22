import loginPage from "../pages/loginPage/loginPage";
import inventoryPage from "../pages/inventoryPage/inventoryPage";
import { inventory } from "../pages/inventoryPage/inventoryPageSelectors";

import { loginDetails,
         pageData } from "../helpers/testData";

describe ('Swag Labs tests', () => {
    beforeAll(async () => {
        await loginPage.goto();
    });

    it('should log in with standard user', async ()=> {
        expect(await loginPage.inputUserName.isDisplayed()).toBe(true);
        expect(await loginPage.inputPassword.isDisplayed()).toBe(true);
        await loginPage.loginUser(loginDetails.username, loginDetails.password);
        expect(browser.getCurrentUrl()).toEqual(pageData.inventoryUrl);
        expect(await inventoryPage.inventoryHeader.getText()).toEqual(pageData.invertoryHeader);
    });

    it('should add an item to the cart', async () => {
    });

    it('should have 6 items on the inventory page', async () => {
        var products = await inventoryPage.inventoryProducts;
        expect(products.length).toEqual(pageData.productCount);  
        products.forEach(async (product,index) => {
            expect(await product.$(inventory.productName).getText()).toEqual(productList[index].name);
            expect(await product.$(inventory.productPrice).getText()).toEqual(productList[index].price);
            expect(await product.$(inventory.productDescription).getText()).toEqual(productList[index].description);
        })  
    });

    it('should complete the purchase process of an item from the inventory', async () => {
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
    });

    it('sort the inventory items by name, Z-to-A', async () => {
    });


})
