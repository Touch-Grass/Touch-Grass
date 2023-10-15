describe("Register Functionalities", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("sign in button should be rendered", () => {
        cy.get(".button-signin");
    });

    it("should be able to perform new user registeration", () => {
        cy.get(".button-signin").click();
        cy.url().should("include", "/register");
        cy.contains("Sign in.");
        const name = "John";
        const surname = "Doe";
        const email = `email${Date.now()}@example.com`;
        const username = `username${Date.now()}`;
        const password = "testPassword111*";
        cy.get('input[name="name"]').then(($input) => {
            cy.wrap($input).type(name);
        });
        cy.get('input[name="surname"]').then(($input) => {
            cy.wrap($input).type(surname);
        });
        cy.get('input[name="email"]').then(($input) => {
            cy.wrap($input).type(email);
        });
        cy.get('input[name="username"]').then(($input) => {
            cy.wrap($input).type(username);
        });
        cy.get('input[name="password"]').then(($input) => {
            cy.wrap($input).type(password);
        });
        cy.get('input[name="passwordRepeat"]').then(($input) => {
            cy.wrap($input).type(password);
        });
        cy.get(".button-default").should("have.text", "Register").click();
        cy.contains("Registration completed!");
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.get('input[name="username"]').then(($input) => {
            cy.wrap($input).type(username);
        });
        cy.get('input[name="password"]').then(($input) => {
            cy.wrap($input).type(password);
        });
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.contains("Hello there");
        cy.contains(username);
    });
});
