class Information {

    private firstName: string;
    private lastName: string;
    private postalcode: string;
    private continueButton: string;

    constructor(){
        this.firstName = '[data-test="firstName"]';
        this.lastName = '[data-test="lastName"]';
        this.postalcode = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
    }

    public fillInformation (): void {
        cy.get(this.firstName).type("Cypress");
        cy.get(this.lastName).type("Workshop");
        cy.get(this.postalcode).type("00000");
    }

    public continue(): void {
        cy.get(this.continueButton).click();
    }


}

export {Information};
