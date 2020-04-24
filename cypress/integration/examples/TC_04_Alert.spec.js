describe('Alert', function() {
    
    it('Handling Alert', function() {
        cy.visit("http://demo.automationtesting.in/Alerts.html")
        //General Alert
        cy.get("div#OKTab>button").click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })
        //Confirmation Alert
        cy.get("a[href='#CancelTab']").click()
        cy.get("div#CancelTab>button").click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Press a Button !')
        })
    })
})