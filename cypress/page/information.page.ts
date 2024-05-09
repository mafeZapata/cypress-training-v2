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
  
    public fillInformation (firstName: string, lastName: string, postalCode: string): void {
        cy.get(this.firstName).type(firstName);
        cy.get(this.lastName).type(lastName);
        cy.get(this.postalcode).type(postalCode);
    }

    public continue(): void {
        cy.get(this.continueButton).click();
    }


}

export {Information};
