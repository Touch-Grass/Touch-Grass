import "cypress-file-upload";
import registerFromHomePage from "cypress/utils/register.utils";
import loginFromHomePage from "cypress/utils/login.utils";

describe("Login, logout functionalities", () => {
    const name: string = "John";
    const surname: string = "Doe";
    const email: string = `email${Date.now()}@example.com`;
    const username: string = `username${Date.now()}`;
    const password: string = "testPassword111*";

    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to log in and log out from home page", () => {
        cy.clearCookies();
        // register a new account from home page
        registerFromHomePage(name, surname, email, username, password);
        // go to home page
        cy.get(".navbar-title").click();
        cy.wait(1000);
        cy.contains("You should ");
        // login with the new account
        loginFromHomePage(username, password);
        cy.contains(name).click();
        cy.contains("Log Out").click();
        cy.wait(1000);
        cy.get(".button-signin");
        cy.get(".button-login");
    });
});
