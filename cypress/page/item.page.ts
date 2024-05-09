class Item {
    
    private addItem: string;

    constructor() {
        this.addItem = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
    }

    public  AddItemToCar(): void {
        cy.get(this.addItem).click();
    }

}

export {Item};
