class ProductsList {
    private list : string;

    constructor() {
        this.list = '[data-test="item-1-title-link"] > [data-test="inventory-item-name"]';
    }

    public selectProduct(): void {
       cy.get(this.list).click();
    }
}

export {ProductsList};
