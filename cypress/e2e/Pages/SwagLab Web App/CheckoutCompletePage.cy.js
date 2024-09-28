class CheckoutCompletePage {

    elements = {
        url : () => cy.url().should('include', '/checkout-complete.html'),
        complete : () => cy.get('[data-test="title"]'),
        appreciationMessage : () => cy.get('[data-test="complete-header"]'),    
        backHomeBtn : () => cy.get('[data-test="back-to-products"]')
    }

    checkoutComplete (){
        this.elements.url()
        this.elements.complete().should('be.visible').should('contain', 'Checkout: Complete!')
        this.elements.appreciationMessage().should('be.visible').should('contain', 'Thank you for your order!')
        this.elements.backHomeBtn().click()
    }

}


module.exports = new CheckoutCompletePage();