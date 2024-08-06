class ProductPage {
  selectProduct() {
    cy.get('.productName').should('contain', 'HP Stream').click()
  }
  
  addToCart() {
    cy.get('.plus').click()
    cy.get('.fixedBtn > .roboto-medium').click()
  }
}
  
export default ProductPage