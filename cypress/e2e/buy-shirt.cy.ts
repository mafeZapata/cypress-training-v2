import { LoginPage } from "../page/index";
import { ProductsList } from "../page/products-list.page";
import { Item } from "../page/item.page";
import { ShoppingCar } from "../page/shopping-cart.page";
import { Information } from "../page/information.page";
import { CheckoutComplete } from "../page/checkout-complete.page";


const loginPage = new LoginPage();
const productsList = new ProductsList();
const item = new Item();
const shoppingCar = new ShoppingCar();
const information = new Information();
const checkoutComplete = new CheckoutComplete();


describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    loginPage.visitLoginPage();
    loginPage.signIn();
    productsList.selectProduct();
    item.AddItemToCar();
    shoppingCar.viewShoppingCar();
    shoppingCar.checkout();
    information.fillInformation();
    information.continue();
    checkoutComplete.clickOnFinish();
    checkoutComplete.verifyMessage();

  });
});



