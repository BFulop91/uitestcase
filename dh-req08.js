describe('Click on UI Testing Button get navigated to the Home page', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com/form.html')
	cy.contains('UI Testing').click();
	cy.location('href').should('equal','http://uitest.duodecadits.com/');
	
  })
})