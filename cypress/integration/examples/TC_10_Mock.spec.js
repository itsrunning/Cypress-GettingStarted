describe('Mocks', function() {

    beforeEach(function(){
        cy.visit('http://localhost:4100/login')
        cy.get('input[type="email"]').type('divig93@gmail.com')
        cy.get('input[type="password"]').type('annaianai')
        cy.get('button[type="submit"]').click()
        cy.server()
    })
    
    it('Tags tesing', function() {
        cy.route('GET','**/tags','fixture:tags.json')
        cy.contains('Global Feed').should('be.visible')
        cy.get('.tag-list').should('contain','cypress').and('contain','testing').and('contain','automation')
    })

    it('Articles tesing', function() {
        cy.route('GET','**/articles*','fixture:articles.json')
        cy.get('.article-preview').should('contain','No articles are here... yet.')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain','Vignesh Article')
    })
}) 