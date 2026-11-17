import ProductCard from './ProductCard'

describe('ProductCard', () => {
  it('shows product name and price', () => {
    cy.mount(<ProductCard />)
    cy.contains('Niacinamide Serum').should('be.visible')
    cy.contains('$9.90').should('be.visible')
  })
})
