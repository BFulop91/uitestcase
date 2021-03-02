describe('<p> tag text on Home page', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com')
	cy.get('p').contains('This site is dedicated to perform some exercises and demonstrate automated web testing.');

	
  })
})