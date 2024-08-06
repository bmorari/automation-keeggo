class HomePage {
  visit() {
    cy.visit('/')
  }
  
  searchProduct(productName) {
    cy.get('#mobileSearch').type(`${productName}{enter}`)
  }

  seeTotalItens() {
    cy.get('.filterCount').should('contain', '1 ITEMS')
  }
}

export default HomePage