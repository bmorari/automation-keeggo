class PaymentPage {
  seeItensPayment() {
    cy.get('h5.roboto-regular').should('contain', 'ORDER SUMMARY')
    cy.get('#userCart').should('contain', '11-D020NR LAPTOP')
  }
}
  
export default PaymentPage