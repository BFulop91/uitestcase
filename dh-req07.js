describe('404 HTTP response code when click on Error button', () => {
  it('Visit UI Test page', () => {
	cy.visit('http://uitest.duodecadits.com')
	//Click on Error button
	cy.contains('Error').click();
	it('test 404', () => {
	cy.request({
    url: 'http://uitest.duodecadits.com/error', 
    failOnStatusCode: false 
  }).then((response) => {
    expect(response.status).to.eq(404)
    expect(response.body).to.eq("404: Not found")
  })
})
	
  })
})