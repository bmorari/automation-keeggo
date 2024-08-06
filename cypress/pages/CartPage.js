class CartPage {
    openCart() {
      cy.get('#shoppingCartLink').click()
    }
  
    verifyProductInCart() {
      cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').should('contain', '11-D020NR LAPTOP')
      cy.contains('SHOPPING CART')
    }

    clickCheckOut() {
      cy.contains('CHECKOUT').click()
    }

    login() {
      cy.get(':nth-child(1) > .secForm > [a-hint="Username"] > .inputContainer > .ng-pristine').type('keeggotest')
      cy.get(':nth-child(1) > .secForm > [a-hint="Password"] > .inputContainer > .ng-pristine').type('Keeggo@010')
      cy.get('#login_btn').click()
  }
}
  
export default CartPage