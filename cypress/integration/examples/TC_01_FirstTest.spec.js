describe('MyTestSuite', function() {
    
    it('Verify title of the page', function() {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        
    })
})