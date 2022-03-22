import loginPage from "../pages/loginPage/loginPage";
import inventoryPage from "../pages/inventoryPage/inventoryPage";
import { inventory } from "../pages/inventoryPage/inventoryPageSelectors";
import  cartPage from "../pages/cartPage/cartPage";
import { cart } from "../pages/cartPage/cartPageSelectors";

import { loginDetails,
         pageData,
         productList } from "../helpers/testData";

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

    it('should have 6 items on the inventory page', async () => {
        var products = await inventoryPage.inventoryProducts;
        expect(products.length).toEqual(pageData.productCount);  
        products.forEach(async (product,index) => {
            expect(await product.$(inventory.productName).getText()).toEqual(productList[index].name);
            expect(await product.$(inventory.productPrice).getText()).toEqual(productList[index].price);
            expect(await product.$(inventory.productDescription).getText()).toEqual(productList[index].description);
        })  
    });

    it('should add an item to the cart', async () => {
        var products = await inventoryPage.inventoryProducts;
        if(products.length != 0){
            await inventoryPage.addTocart.get(0).click();  
            expect(await inventoryPage.cartItemCount.getText()).toEqual(pageData.productQuantity);  
            var product = await inventoryPage.inventoryProducts.get(0);
            var productName = await product.$(inventory.productName).getText();
            var productPrice = await product.$(inventory.productPrice).getText();
            var productDesc = await product.$(inventory.productDescription).getText();

            await inventoryPage.viewCart.click();

            expect(browser.getCurrentUrl()).toEqual(pageData.cartUrl);

            var cartItem = await cartPage.cartItems.get(0);
            expect(productName).toEqual(await cartItem.$(cart.productName).getText());
            expect(productPrice).toEqual(await cartItem.$(cart.productPrice).getText());
            expect(productDesc).toEqual(await cartItem.$(cart.productDescription).getText());
        }
        else{
            expect(await inventoryPage.inventoryProducts.length).toEqual(0);
        }
    });

    it('should complete the purchase process of an item from the inventory', async () => {
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
    });

    it('sort the inventory items by name, Z-to-A', async () => {
    });


})
