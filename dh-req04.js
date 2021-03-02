describe('Home button turn to active when click on it', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com/form.html')
	cy.contains('Home').click();
	cy.contains('Home').should('have.css','background-color','rgb(8, 8, 8)');

  })
})