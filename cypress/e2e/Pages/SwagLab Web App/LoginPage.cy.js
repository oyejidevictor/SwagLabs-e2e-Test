//  ***** usernames *****
// standard_user
// locked_out_user
// problem_user
// performance_glitch_user
// error_user
// visual_user

// ***** Password *****
// secret_sauce

class LoginPage {

  elements = {
    usernameField: () => cy.xpath('//*[@name="user-name"]'),
    passwordField: () => cy.xpath('//*[@name="password"]'),
    inputUsername: () => cy.get('input[data-test="username"]'),
    inputPassword: () => cy.get('input[data-test="password"]'),
    loginBtn: () => cy.get('input[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    errorMessageBTN: () => cy.get('[data-test="error-button"]'),
    url : () => cy.url().should('include', '/inventory.html')
  }

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  swagLabLogin() {
    //incorrect login details
    this.elements.inputUsername().type("user").and("have.attr", "type").and("include", "text"),
    this.elements.inputPassword().type("sauce").and("have.attr", "type").and("include", "password"),
    this.elements.loginBtn().click()
    this.elements.errorMessage().should("contain", 'Epic sadface: Username and password do not match any user in this service')
    this.elements.errorMessageBTN().click() 

    //correct login details
    this.elements.inputUsername().clear().type("standard_user").and("have.attr", "type").and("include", "text"),
    this.elements.inputPassword().clear().type("secret_sauce").and("have.attr", "type").and("include", "password"),
    this.elements.loginBtn().should("be.visible"),
    this.elements.loginBtn().click()
    this.elements.url()
  }

}

module.exports = new LoginPage;