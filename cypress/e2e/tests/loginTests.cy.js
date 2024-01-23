///<reference types="cypress" />

describe('Login Tests', () => {

    it('Successful Login', () => {
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");
        cy.get("[id='login-form:email']").type("john.smith@gmail.com")
        cy.get("[id='login-form:password']").type("john");
        cy.get("[id='login-form:login']").click();
        cy.get("[id='logout-form'] p").should("have.text","Logged in as");
    })

    it('Verify Mandatory Fields Validation', () => {
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");
        cy.get("[id='login-form:email']").type("john.smith@gmail.com")
        cy.get("[id='login-form:login']").click();
        cy.get("[class='message-error'] td").should("have.text","	Please enter your password ");
        cy.get("[id='login-form:email']").clear();
        cy.get("[id='login-form:password']").type("john");
        cy.get("[id='login-form:login']").click();
        cy.get("[class='message-error'] td").should("have.text","	Please enter your e-mail ");
        cy.get("[id='login-form:email']").type("john.smith@gmail.com")
        cy.get("[id='login-form:password']").type("john");
        cy.get("[id='login-form:login']").click();
        cy.get("[id='logout-form'] p").should("have.text","Logged in as");
    })

    it('User Login with Invalid User', () => {
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");
        cy.get("[id='login-form:email']").type("john.smith@gmail.com");
        cy.get("[id='login-form:password']").type("asdldsadsaklds");
        cy.get("[id='login-form:login']").click();
        cy.get("[class='message-error'] td").should("have.text","	Could not log in user: Internal Error ");
    })

    it('User Logout', () => {
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");
        cy.get("[id='login-form:email']").type("john.smith@gmail.com")
        cy.get("[id='login-form:password']").type("john");
        cy.get("[id='login-form:login']").click();
        cy.get("[name='logout-form:logout']").click();
        cy.get("[for='email']").should("have.text","Email:");
    })
})