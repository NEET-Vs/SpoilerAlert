describe('Check the index /', () => {
  it('h1 Should contains "Spoiler Alert"', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').eq(0).contains(' Spoiler ⚠︎lert! ')
  })
})
