class CheckoutPage {
  elements = {
    url : () => cy.url().should('include', '/checkout-step-one.html'),
    firstnameField: () => cy.get('[data-test="firstName"]'),
    lastNameField: () => cy.get('[data-test="lastName"]'),
    zipPostalCodeField: () => cy.get('[data-test="postalCode"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    errorMessageBtn: () => cy.get(".error-button"),
    continueBtn: () => cy.get('input[type="submit"]'),
    cancelBtn: () => cy.get('[data-test="cancel"]'),
    checkoutBtn: () => cy.get("#checkout"),
    checkoutOverview: () => cy.get('[data-test="title"]'),
    
  };

  checkout() {
    this.elements.url()
    //Validate input
    this.elements.continueBtn().click();
    this.elements
      .errorMessage()
      .should("contain", "Error: First Name is required");
    this.elements.firstnameField().type("Victor");
    this.elements.continueBtn().click();
    this.elements
      .errorMessage()
      .should("contain", "Error: Last Name is required");
    this.elements.errorMessageBtn().click();
    
    this.elements.cancelBtn().should("be.visible").click();
    this.elements.checkoutBtn().click();
    this.elements.firstnameField().clear().type("Victor");
    this.elements.lastNameField().clear().type("Oyejide");
    this.elements.zipPostalCodeField().clear().type("10010001");
    this.elements.continueBtn().click();
    this.elements.checkoutOverview().should("contain", "Checkout: Overview");

  }
}

module.exports = new CheckoutPage();
