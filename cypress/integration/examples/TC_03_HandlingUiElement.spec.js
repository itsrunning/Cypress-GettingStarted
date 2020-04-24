describe('UI elements', function() {
    
    it('Verify Input box & radio button', function() {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.title().should('eq','Register')
        //ImputBoxes
        cy.get("input[ng-model='FirstName']").should('be.visible').should('be.enabled').type("vignesh")
        cy.get("input[ng-model='LastName']").should('be.visible').should('be.enabled').type("srinivasan")
        //RadioButtons
        cy.get("input[value='Male']").should('be.visible').should('not.be.checked').click()
        cy.get("input[value='FeMale']").should('be.visible').should('not.be.checked').click()
        cy.get("input[value='Male']").should('be.visible').should('not.be.checked').click()
    })

    it('Verify checkbox', function() {
        //CheckBoxes
        cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')
        cy.get("#checkbox2").check().should('be.checked').and('have.value','Movies')
        cy.get("#checkbox3").check().should('be.checked').and('have.value','Hockey')
        cy.get("#checkbox1").uncheck().should('not.be.checked')
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')
        //To select multiple checkbox in one go
        cy.get("input[type='checkbox']").check(['Cricket','Hockey'])
    })

    it('Verify static dropdown', function() {
        cy.get("#Skills").select('Android').should('have.value','Android')
    })

    it('Verify multi select dropdown', function() {
        cy.get("#msdd").click()
        cy.get(".ui-corner-all").contains('English').click()
        cy.get(".ui-corner-all").contains('Japanese').click()
    })

    it('Verify dynamic dropdown', function() {
        cy.get("span[role='combobox']").click({force:true})
        cy.get(".select2-search__field").type('Ind')
        cy.get(".select2-search__field").type('{enter}')
    })
})