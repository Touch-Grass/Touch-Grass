import registerFromHomePage from "cypress/utils/register.utils";

describe("Register functionalities", () => {
    const name: string = "John";
    const surname: string = "Doe";
    const email: string = `email${Date.now()}@example.com`;
    const username: string = `username${Date.now()}`;
    const password: string = "testPassword111*";

    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to create a new account and login with it", () => {
        cy.clearCookies();
        // register a new account from home page
        registerFromHomePage(name, surname, email, username, password);
        cy.wait(1000);

        // login with the new account from success page
        cy.contains("Registration completed!");
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.wait(1000);

        // go back to home page with user's name
        cy.contains("You should");
        cy.contains(name);
    });
});
