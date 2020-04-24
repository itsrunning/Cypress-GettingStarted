describe('Custom commands', function() {

    beforeEach(function(){
        cy.fixture('fixture1').as('data')
    })
    
    it('Valid Login', function() {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        cy.login(this.data.email1,this.data.password1)
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })

    it('Invalid Login', function() {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        cy.login(this.data.email1,this.data.password2)
        cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
    })
})