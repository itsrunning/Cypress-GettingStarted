describe('MyTestSuite', function() {
    
    it('Verify title of the page', function() {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("input#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get("input.search-box-button").click()
        cy.get("input[value='Add to cart']").click()
        cy.get("input#addtocart_4_EnteredQuantity").clear().type("4")
        cy.get("input#add-to-cart-button-4").click()
        cy.wait(5000)
        cy.get("#topcartlink a").click()
        cy.wait(3000)   
        cy.get(".product-unit-price").contains("$1,800.00")
    })
})