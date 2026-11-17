import CartPage from './CartPage'

describe('CartPage', () => {
  it('shows shopping bag information', () => {
    cy.mount(<CartPage />)
    cy.contains('Your Shopping Bag').should('be.visible')
    cy.contains('3 items in your bag').should('be.visible')
    cy.contains('Total: $64.90').should('be.visible')
  })
})
