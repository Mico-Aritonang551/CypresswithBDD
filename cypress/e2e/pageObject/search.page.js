const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class SearchData {
    static visit() {
        cy.visit(URL)
    }
    static inputKeyword() {
        cy.get(SEARCH).type('online {enter}')
    }
}

export default SearchData
