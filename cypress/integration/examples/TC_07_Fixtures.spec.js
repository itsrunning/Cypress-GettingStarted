describe('Fixtures', function() {

    beforeEach(function(){
        cy.fixture('fixture1').as('data')    
    })

    it('Fixture Demo test', function() 
    {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        cy.get("#Email").type(this.data.email1)
        cy.get("#Password").type(this.data.password1)
        cy.get("input[type='submit']").click()

    })
    
})