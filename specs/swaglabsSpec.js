import loginPage from "../pages/loginPage/loginPage";
import inventoryPage from "../pages/inventoryPage/inventoryPage";
import { inventory } from "../pages/inventoryPage/inventoryPageSelectors";
import  cartPage from "../pages/cartPage/cartPage";
import { cart } from "../pages/cartPage/cartPageSelectors";
import  checkoutPage from "../pages/checkoutPage/checkoutPage";
import  overviewPage from "../pages/overviewPage/overviewPage";
import { overview } from "../pages/overviewPage/overviewPageSelectors";
import  thankYouPage from "../pages/thankYouPage/thankYouPage";

import { loginDetails,
         pageData,
         productList,
         userDetails,
         sortedProductListByName,
         sortedProductListByPrice } from "../helpers/testData";

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
        await cartPage.checkoutButton.click();

        expect(browser.getCurrentUrl()).toEqual(pageData.checkoutUrl);
        await checkoutPage.submitCheckOutForm(userDetails.firstName,userDetails.lastName,userDetails.postalCode);

        expect(browser.getCurrentUrl()).toEqual(pageData.overviewUrl);
        var orderItem = await overviewPage.cartList.get(0);
        var orderItemName = await orderItem.$(overview.productName);
        var orderItemPrice = await orderItem.$(overview.productPrice);
        var orderItemQuantity = await orderItem.$(overview.productQuantity);
        expect(await orderItemName.isDisplayed()).toBe(true);
        expect(await orderItemName.isDisplayed().getText()).toEqual(productList[0].name);
        expect(await orderItemPrice.isDisplayed()).toBe(true);
        expect(await orderItemPrice.isDisplayed().getText()).toEqual(productList[0].price);
        expect(await orderItemQuantity.isDisplayed()).toBe(true);
        expect(await orderItemQuantity.getText()).toEqual(pageData.productQuantity);
        var summary = await overviewPage.summaryInfo;
        summary.forEach(summaryInfo=> {
            expect(summaryInfo.isDisplayed()).toBe(true);
        });  
        await overviewPage.finishButton.click();

        expect(browser.getCurrentUrl()).toEqual(pageData.thankYouUrl);
        expect(await thankYouPage.completeOrderText.getText()).toEqual(pageData.thankYouMessage);  
        expect(await thankYouPage.completeOrderImage.getAttribute('src')).toEqual(pageData.thankYouImage);
        expect(await thankYouPage.goHomeButton.isDisplayed()).toBe(true);
        await thankYouPage.goHomeButton.click();

        expect(browser.getCurrentUrl()).toEqual(pageData.inventoryUrl);
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
        await inventoryPage.sortOption.click();
        await inventoryPage.sortProductPriceInDescOrder.click();

        var sortedProducts = await inventoryPage.inventoryProducts;

        for(let sortedProduct in sortedProducts){
            var sortedName = await sortedProducts[sortedProduct].$(inventory.productName).getText();
            var sortedPrice = await sortedProducts[sortedProduct].$(inventory.productPrice).getText();
            var sortedDesc = await sortedProducts[sortedProduct].$(inventory.productDescription).getText();
            expect(sortedName).toEqual(sortedProductListByPrice[sortedProduct].name);
            expect(sortedPrice).toEqual(sortedProductListByPrice[sortedProduct].price);
            expect(sortedDesc).toEqual(sortedProductListByPrice[sortedProduct].description);

        } 
    });

    it('sort the inventory items by name, Z-to-A', async () => {
        await inventoryPage.sortOption.click();
        await inventoryPage.sortProductNameInDescOrder.click();

        var sortedProducts = await inventoryPage.inventoryProducts;

        for(let sortedProduct in sortedProducts){
            var sortedName = await sortedProducts[sortedProduct].$(inventory.productName).getText();
            var sortedPrice = await sortedProducts[sortedProduct].$(inventory.productPrice).getText();
            var sortedDesc = await sortedProducts[sortedProduct].$(inventory.productDescription).getText();
            expect(sortedName).toEqual(sortedProductListByName[sortedProduct].name);
            expect(sortedPrice).toEqual(sortedProductListByName[sortedProduct].price);
            expect(sortedDesc).toEqual(sortedProductListByName[sortedProduct].description);
        } 
    });


})
