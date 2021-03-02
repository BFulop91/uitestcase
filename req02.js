describe('Company logo visible', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com')

	//Check if the company logo is visible
    cy.get('[alt="Docler Holding"]').should('be.visible')
	
	//Click on Form button
	cy.contains('Form').click();

	//Check if the company logo is visible
    cy.get('[alt="Docler Holding"]').should('be.visible');	
	
	//Click on UI Testing button
	cy.contains('UI Testing').click();

	//Check if the company logo is visible
    cy.get('[alt="Docler Holding"]').should('be.visible');	

  })
})