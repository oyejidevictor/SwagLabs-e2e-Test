class CheckoutOverviewPage {
  elements = {
    url : () => cy.url().should('include', '/checkout-step-two.html'),
    paymentInfo: () =>
      cy.get('.summary_info > [data-test="payment-info-label"]'),
    shippingInfo: () =>
      cy.get('.summary_info > [data-test="shipping-info-label"]'),
    total: () => cy.get('.summary_info > [data-test="total-label"]'),
    cancelBtn: () => cy.get('[data-test="cancel"]'),

    //cart
    cartIcon: () => cy.get("#shopping_cart_container > .shopping_cart_link"),
    checkoutBtn: () => cy.get("#checkout"),

    //checkout
    firstnameField: () => cy.get('[data-test="firstName"]'),
    lastNameField: () => cy.get('[data-test="lastName"]'),
    zipPostalCodeField: () => cy.get('[data-test="postalCode"]'),
    continueBtn: () => cy.get('input[type="submit"]'),

    finishBtn: () => cy.get('button#finish')
  };

  checkoutOverview() {
    this.elements.url()
    this.elements.paymentInfo().scrollIntoView().should("be.visible");
    this.elements.shippingInfo().scrollIntoView().should("be.visible");
    this.elements.total().scrollIntoView().should("be.visible");
    this.elements.cancelBtn().click();

    //cart
    this.elements.cartIcon().click();
    this.elements.checkoutBtn().click();

    //checkout
    this.elements.firstnameField().clear().type("Victor");
    this.elements.lastNameField().clear().type("Oyejide");
    this.elements.zipPostalCodeField().clear().type("10010001");
    this.elements.continueBtn().click();

    this.elements.finishBtn().scrollIntoView().click();
  }
}

module.exports = new CheckoutOverviewPage();
