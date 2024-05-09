class CheckoutComplete{
    private finishButtom: string;
    private endingInformation: string;

    constructor(){

        this.finishButtom = '[data-test="finish"]';
        this.endingInformation = '#contents_wrapper > .checkout_complete_container > h2' ;
    }

    public clickOnFinish (): void {
        cy.get(this.finishButtom).click();
    }

    public verifyMessage(): void {
        cy.get(this.endingInformation).should("have.text", "Thank you for your order!")
    }
}

export {CheckoutComplete};
