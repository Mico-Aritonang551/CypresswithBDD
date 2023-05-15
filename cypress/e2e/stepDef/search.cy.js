const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on home page', () => {
 cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I enter a keyword into search bar', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then('I should see keyword as the search result', () => {
    cy.get('h2').should('contain.text', 'Search Results:') 
})