describe('Form button turn to active when click on it', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com')

	cy.contains('Form').click();
	cy.contains('Form').should('have.css','background-color','rgb(8, 8, 8)');

	
  })
})