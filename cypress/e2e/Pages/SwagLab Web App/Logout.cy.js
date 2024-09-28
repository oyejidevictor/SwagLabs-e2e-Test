class Logout {
  elements = {
    url: () => cy.url().should("include", "/"),
    openBurger: () => cy.get('.bm-burger-button > [type="button"]'),
    logoutLink: () => cy.get(".bm-item-list > #logout_sidebar_link"),
    usernameField: () => cy.xpath('//*[@name="user-name"]').clear(),
    passwordField: () => cy.xpath('//*[@name="password"]').clear(),
  };

  swagLabLogout() {
    this.elements.openBurger().click(),
      this.elements.logoutLink().click(),
      this.elements.url(),
      this.elements.usernameField().clear();
    this.elements.passwordField().clear();
  }
}

module.exports = new Logout();
