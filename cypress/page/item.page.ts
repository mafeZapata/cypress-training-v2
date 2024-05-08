class Item {
    
    private addItem: string;

    constructor() {
        this.addItem = '[data-test="add-to-cart"]';
    }

    public  AddItemToCar(): void {
        cy.get(this.addItem).click();
    }

}

export {Item};
