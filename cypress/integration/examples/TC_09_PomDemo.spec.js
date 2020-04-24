import LoginPage from '../pages/loginPage'

describe('Pom Model', function() {
    const lp = new LoginPage()

    beforeEach(function(){
        cy.fixture('fixture1').as('data')    
    })

    it('POM Demo test', function() 
    {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        lp.fillEmail(this.data.email1)
        lp.fillPassword(this.data.password1)
        lp.clickLoginButton()
    })
})