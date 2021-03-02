describe('Form should be visible on the Form page', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com/form.html');
	cy.get('#hello-input').should('be.visible');
	cy.get('#hello-submit').should('be.visible');	

	
  })
})