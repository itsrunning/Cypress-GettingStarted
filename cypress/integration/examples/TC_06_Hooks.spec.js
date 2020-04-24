describe('Hooks', function() {

    before(function(){
        cy.log("Before Method")
    })

    after(function(){
        cy.log("After Method")
    })

    beforeEach(function(){
        cy.log("Before Each Method")
    })

    afterEach(function(){
        cy.log("After Each Method")
    })
    
    it('Searching', function() 
    {
        cy.log("Searching Test")
    })

    it('Advanced Searching', function() 
    {
        cy.log("Advanced Searching Test")
    })

    it('Listing product', function() 
    {
        cy.log("Listing product Test")
    })
})