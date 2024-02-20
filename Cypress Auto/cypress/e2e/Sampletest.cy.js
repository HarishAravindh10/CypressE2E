describe('template spec', () => 
{
  it('passes', () => 
  {
    cy.visit('http://localhost:3002/')
    cy.title().should('eq','React App')

    cy.get("#username").type('admin')

    cy.get("#password").type('password')

    cy.get("button[type='submit']").click()
    
  })


})  