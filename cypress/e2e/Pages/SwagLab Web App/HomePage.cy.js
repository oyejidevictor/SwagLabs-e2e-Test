class HomePage {
  elements = {
    logo: () => cy.get('div[class="app_logo"]'),
    sidebar: () => cy.get(".bm-burger-button > [type='button']"),
    openSidebar: () => cy.get(".bm-burger-button > [type='button']"),
    closeSidebar: () => cy.get(".bm-cross-button > #react-burger-cross-btn"),
    cartIcon: () => cy.get("#shopping_cart_container > .shopping_cart_link"),
    cartIconBadge: () =>
      cy.get(
        "#shopping_cart_container > .shopping_cart_link .shopping_cart_badge"
      ),
    titlePage: () =>
      cy.get(".header_secondary_container").should("contain", "Products"),
    filter: () => cy.get(".product_sort_container"), //alternate the number
    itemLable: () => cy.get(".inventory_item_label > #item_5_title_link"), //alternate the number
    inventoryItemDesc: () => cy.get(".inventory_container"),
    itemPrice: () => cy.get(".pricebar > .inventory_item_price"),

    addToCartBTN: () =>
      cy.get('.pricebar > [data-test="add-to-cart-sauce-labs-backpack"]'),
    removeFromCartBTN: () =>
      cy.get('.pricebar > [data-test="remove-sauce-labs-backpack"]'),
    backBtnToProducts: () => cy.get('[data-test="back-to-products"]'),

    inventoryImage: () => cy.get(".inventory_details_img"),
    inventoryPrice: () => cy.get(".inventory_details_price"),
    inventoryDetails: () => cy.get(".inventory_details_name"),
    inventoryAddToCartBtn: () =>
      cy.get('.btn_inventory[data-test="add-to-cart"]'),
    inventoryRemoveFromCartBtn: () =>
      cy.get('.btn_inventory[data-test="remove"]'),

    twitter: () => cy.get('["data-test="social-twitter"]'),
    facebook: () => cy.get('[data-test="social-facebook"]'),
    linkedIn: () => cy.get('[data-test="social-linkedin"]'),
  };

  swagLabHomePage() {
    this.elements.logo().should("contain", "Swag Labs");
    this.elements.sidebar().should("be.visible");
    this.elements.openSidebar().click();
    this.elements.closeSidebar().click();
    this.elements.cartIcon().should("be.visible");
    this.elements.titlePage().should("contain", "Products");
    this.elements.filter().should("be.visible");
    this.elements.filter().select(2);

    //validate if items were filtered by price
    // this.elements
    //   .inventoryItemDesc()
    //   .find('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    //   .then(this.elements.itemPrice().should("contain", "$29.99"));

    this.elements.itemLable().should("be.visible");
    this.elements.itemPrice().should("be.visible");
    this.elements.itemLable().click();

    //inventory
    this.elements.inventoryImage().should("be.visible");
    this.elements.inventoryPrice().should("be.visible");
    this.elements.inventoryDetails().should('contain', 'Sauce Labs Fleece Jacket')
    this.elements
      .inventoryAddToCartBtn()
      .should("contain", "Add to cart")
      .click();
    this.elements
      .inventoryRemoveFromCartBtn()
      .should("contain", "Remove")
      .click();
    this.elements.backBtnToProducts().click();

    this.elements.addToCartBTN().should('contain', 'Add to cart').click();
    this.elements.cartIconBadge().should("be.visible");
    this.elements.removeFromCartBTN().should('contain', 'Remove').click();

    this.elements.twitter().scrollIntoView().should('be.visible').click();;
    this.elements.facebook().click();
    this.elements.linkedIn().click();
  }
}

module.exports = new HomePage();
