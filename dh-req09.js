describe('<h1> tag text on Home page', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com')
	//'Welcome to the Docler Holding QA Department' text visible on the Home page in <h1> tag
	cy.get('h1').contains('Welcome to the Docler Holding QA Department');

  })
})