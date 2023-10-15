describe("Register, login, logout functionalities", () => {
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
        cy.get('input[name="name"]').type(name);
        cy.get('input[name="surname"]').type(surname);
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[name="passwordRepeat"]').type(password);
        cy.get(".button-default").should("have.text", "Register").click();
        cy.contains("Registration completed!");
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.contains("Hello there");
        cy.contains(username);
    });

    it("log in and log out should work", () => {
        cy.get(".button-login:first").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);

        cy.get(".button-default").should("have.text", "Log in").click();
        cy.contains("Hello there");
        cy.contains(username);
        cy.get(".user-icon-chevrown-down").click();
        cy.contains("Log Out").click();
        cy.get(".button-signin");
        cy.get(".button-login");
    });
});
