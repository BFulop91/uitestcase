describe('Title is UI Testing Site', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com')

	//Title is UI Testing Site
	cy.title().should('equal','UI Testing Site');
	
	//Click on Home button
	cy.contains('Home').click();
	
	//Title is UI Testing Site
	cy.title().should('equal','UI Testing Site');
	
	//Click on Form button
	cy.contains('Form').click();
	
	//Title is UI Testing Site
	cy.title().should('equal','UI Testing Site');
	
	//Click on UI Testing button
	cy.contains('UI Testing').click();
	
	//Title is UI Testing Site
	cy.title().should('equal','UI Testing Site');

  })
})