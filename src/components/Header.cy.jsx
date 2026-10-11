import Header from './Header'

describe('Header', () => {
  it('shows VG STORE title', () => {
    cy.mount(<Header />)
    cy.contains('VG STORE').should('be.visible')
  })
})
