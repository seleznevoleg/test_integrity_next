/// <reference types="cypress" />

describe('test task', () => {
  it('trying to find Alexey', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('[id="CybotCookiebotDialog"]').then(cookie => {
      cy.wrap(cookie).contains('Allow all').should('be.visible')
        .click()
    })
    //That was a tricky - from the box there wasn't a solution for hover in Cypress. I used external library and it works
    cy.get('.mod_navigation').contains('About Us').realHover().then(() => {
      cy.wait(2000)
      cy.get('.mod_navigation').contains('Team').should('be.visible').realHover().click({ force: true })
    })
    cy.get('#main > .inside').contains('Alexey').should('exist')
  })
})