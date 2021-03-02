describe('Home button navigate to Home page', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com/form.html')

	//Click on the Home button, get navigated to the Home page
	cy.contains('Home').click();
	cy.location('href').should('equal','http://uitest.duodecadits.com/');
	
	
  })
})