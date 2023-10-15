describe("Register and Login Functionalities", () => {
    let name: string = "John";
    let surname: string = "Doe";
    let email: string = `email${Date.now()}@example.com`;
    let username: string = `username${Date.now()}`;
    let password: string = "testPassword111*";
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("sign up should be able to perform new user registeration", () => {
        cy.get(".button-signin").click();
        cy.url().should("include", "/register");
        cy.contains("Sign up.");
        name = "John";
        surname = "Doe";
        email = `email${Date.now()}@example.com`;
        username = `username${Date.now()}`;
        password = "testPassword111*";
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
        cy.url().should("include", "/login");
        cy.contains("Log in.");
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

    it("log in should work", () => {
        cy.get(".button-login:first").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
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
