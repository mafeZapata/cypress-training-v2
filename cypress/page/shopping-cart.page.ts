class ShoppingCar{

    private  viewCar: string;
    private checkoutButtom: string;

    constructor (){
        this.viewCar = '[data-test="shopping-cart-link"]';
        this.checkoutButtom = '[data-test="checkout"]';
    }

    public viewShoppingCar(): void{
        cy.get(this.viewCar).click();
    }

    public checkout(): void{
        cy.get(this.checkoutButtom).click();
    }
}

export {ShoppingCar};
