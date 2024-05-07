import { groupBy } from "cypress/types/lodash";

describe("Buy a black t-shirt", () => {
    it("then the t-shirt should be bought", () => {
        cy.visit("https://www.saucedemo.com/"); 
        cy.get(".login-box > form > div > input#user-name").type("standard_user"); 
        cy.get(".login-box > form > div > input#password").type("secret_sauce"); 
        cy.get("input[type='submit']").click(); 
        cy.wait(2000);
        cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').click();
        cy.wait(2000);
        cy.get('[data-test="add-to-cart"]').click();
        cy.wait(2000);
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.wait(2000);
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("Cypress");
        cy.get('[data-test="lastName"]').type("Workshop");
        cy.get('[data-test="postalCode"]').type("00000");
        cy.get('[data-test="continue"]').click();
        cy.wait(2000);
        cy.get('[data-test="finish"]').click();
        cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
            "have.text",
            "Thank you for your order!"
       ); 
    });
});
