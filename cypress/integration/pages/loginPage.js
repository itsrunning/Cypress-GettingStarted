/// <reference types="cypress"/>

class LoginPage{
visit(){
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
}

getEmail(){return "#Email"}

getPassword(){return "#Password"}

getLoginButton(){return "input[type='submit']"}

fillEmail(email){
    cy.get(this.getEmail()).clear().type(email)
}

fillPassword(password){
    cy.get(this.getPassword()).clear().type(password)
}

clickLoginButton(){
    cy.get(this.getLoginButton()).click()
}
}
export default LoginPage