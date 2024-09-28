class CartPage {

  elements = {
    url : () => cy.url().should('include', '/cart.html'),

    cartIcon: () => cy.get("#shopping_cart_container > .shopping_cart_link"),
    cartIconBadge: () =>
      cy.get(
        "#shopping_cart_container > .shopping_cart_link .shopping_cart_badge"
      ),
    addToCartBTN1: () =>
      cy.get('.pricebar > [data-test="add-to-cart-sauce-labs-backpack"]'),
    addToCartBTN2: () =>
      cy.get('.pricebar > [data-test="add-to-cart-sauce-labs-bike-light'),
    cartPageTitle : () => cy.get('[data-test="title"]'),
    item1 : () => cy.get('.cart_item_label > #item_4_title_link'),
    item2 : () => cy.get('.cart_item_label > #item_0_title_link'),
    cartItemPrice : () => cy.get('.inventory_item_price'),
    remove : () => cy.get('#remove-sauce-labs-backpack'),
    continueShoppingBtn: () => cy.get("#continue-shopping"),
    checkoutBtn: () => cy.get('#checkout'),
    checkoutForm: () => cy.get('[data-test="title"]')
  };

  cart() {
    this.elements.addToCartBTN1().click();
    this.elements.addToCartBTN2().click();
    this.elements.cartIconBadge().should("be.visible");
    this.elements.cartIcon().click();
    this.elements.url();
    this.elements.cartPageTitle().should("be.visible");
    this.elements.item1().should("be.visible")
    this.elements.item2().should("be.visible")
    this.elements.remove().should("contain", "Remove")
    this.elements.cartItemPrice().should("be.visible")
    this.elements.continueShoppingBtn().should("be.visible").click()
    this.elements.cartIcon().click();
    this.elements.checkoutBtn().click();
    this.elements.checkoutForm().should("contain", "Checkout: Your Information");

  }

}

module.exports = new CartPage();
