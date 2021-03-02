describe('Submit values on form', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com/form.html')

	const array = ['John','Sophia','Charlie','Emily'];
	array.forEach((item) => {
		cy.get('#hello-input').type(item)
		cy.get('#hello-submit').click()
		cy.url().should('equal', 'http://uitest.duodecadits.com/hello.html?myName='+item)
		cy.get('#hello-text').contains(item)
		cy.visit('http://uitest.duodecadits.com/form.html')
	})
	

	
  })
})