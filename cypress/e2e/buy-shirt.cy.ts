
import { LoginPage , ProductsList, Item , ShoppingCar, Information, CheckoutComplete} from "../page";

describe("Buy a black t-shirt", () => {
  let loginPage: LoginPage;
  let productsList: ProductsList;
  let item: Item;
  let shoppingCar: ShoppingCar;
  let information:  Information;
  let checkoutComplete: CheckoutComplete;

  before(()=> {
     loginPage = new LoginPage();
     productsList = new ProductsList();
     item = new Item();
     shoppingCar = new ShoppingCar();
     information = new Information();
     checkoutComplete = new CheckoutComplete();
  });
  

  it("then the t-shirt should be bought", () => {
    loginPage.visitLoginPage();
    loginPage.signIn("standard_user","secret_sauce");
    productsList.findProductByName('Sauce Labs Bolt T-Shirt');
    item.AddItemToCar();
    shoppingCar.viewShoppingCar();
    shoppingCar.checkout();
    information.fillInformation("Cypress", "Workshop","00000");
    information.continue();
    checkoutComplete.clickOnFinish();
    checkoutComplete.verifyMessage();

  });
});



