describe('Form button navigate to Form page', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com');

	//Click on the Form button
	cy.contains('Form').click();
	cy.location('href').should('equal','http://uitest.duodecadits.com/form.html');

  })
})