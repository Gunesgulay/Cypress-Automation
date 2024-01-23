///<reference types="cypress" />

describe('Register Tests', () => {

    it('Unsuccessful Register', () => {
        cy.visit("https://demo.borland.com/InsuranceWebExtJS/index.jsf");
        cy.get("[name='login-form:signup']").click();
        cy.get("[name='signup:fname']").type("test")
        cy.get("[name='signup:lname']").type("automation");
        cy.get("[src='data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==']").click();
        cy.get("[name='signup:fname']").type("test")
        cy.get("[src='data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==']").click();
        cy.get(".x-btn-arrow > .x-btn-text").click();
        cy.get("[border='0'] tr:nth-of-type(2) > .x-date-mp-sep > [href='#']").click();
        cy.get("[border='0'] tr:nth-of-type(2) > td:nth-of-type(3) > [href='#']").click();
        cy.get(".x-date-mp-ok").click();
        cy.get(".x-date-inner tr:nth-of-type(4) > td:nth-of-type(4) span").click();
        cy.get("[name='signup:email']").type("test1111@gmail.com")
        cy.get("[name='signup:street']").type("test@gmail.com")
        cy.get("[name='signup:city']").type("phoenix");
        cy.get("[name='signup:zip']").type("74839")
        cy.get("[name='signup:password']").type("8888")
        cy.get("[name='signup:signup']").click();
        cy.get(".message-error").should("have.text","required");
    })
})    