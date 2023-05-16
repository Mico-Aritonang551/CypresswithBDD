import SearchData from './search.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I am on home page', () => {
    SearchData.visit()
})

When('I enter a keyword into search bar', () => {
    SearchData.inputKeyword()
})

Then('I should see keyword as the search result', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})