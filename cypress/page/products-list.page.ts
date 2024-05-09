class ProductsList {
    private list : string;
    private findXName: string;

    constructor() {
        this.list = '[data-test="item-1-title-link"] > [data-test="inventory-item-name"]';
        this.findXName = '[data-test="inventory-item-description"]';
    }

    public selectProduct(): void {
       cy.get(this.list).click();
    }

    public findProductByName(productName: string) {
        cy.get(this.findXName)
          .filter(`:contains("${productName}")`)
          .should('exist')
          .then($element => {
            if ($element.length === 0) {
              throw new Error(`the product "${productName}" is not found.`);
            } else {
              cy.wrap($element).click();
            }
          });
      }
      

}

export {ProductsList};
