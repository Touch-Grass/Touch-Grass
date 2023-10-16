import "cypress-file-upload";

describe("Register, login, add-trail, logout functionalities", () => {
    let name = "John";
    let surname = "Doe";
    let email = `email${Date.now()}@example.com`;
    let username = `username${Date.now()}`;
    let password = "testPassword111*";
    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to perform new user registeration", () => {
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
        cy.contains(name);
    });

    it("should be able to add a new trail after logged in", () => {
        const trailName = `trail-name-${username.slice(-10)}`;
        const location = "Runmaro";
        const description = "You'll probably see a deer or two on the way.";
        const terrain = "Forest";
        const difficulty = "Medium";
        const imageUrl = "/img/trail-image.jpg";
        cy.get(".button-login:first").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get(".button-default")
            .should("have.text", "Log in")
            .click({ timeout: 10000 });
        cy.contains(name);
        cy.contains("New trail").click();
        cy.get('input[name="name"]').type(trailName);
        cy.get('input[name="location"]').type(location);
        cy.get('textarea[name="description"]').type(description);
        cy.get('select[name="terrain"]').select(terrain);
        cy.get('select[name="difficulty"]').select(difficulty);
        cy.get('input[type="file"]').attachFile(imageUrl);
        cy.get(".trail-creator-view").click("center");
        cy.get(".trail-creator-view").click("right");
        cy.get(".trail-creator-view").click("bottom");
        cy.get(".trail-creator-view").click("top");
        cy.contains("Submit").click();
        cy.url().should("include", "/trail");
        cy.contains("Length");
        cy.contains(description);
    });

    // it("should be able to leave comments", () => {
    //     cy.get('input[name="title"]').type("");
    // });

    it("should be able to log out", () => {
        cy.get(".button-login:first").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.contains(name).click();
        cy.contains("Log Out").click();
        cy.get(".button-signin");
        cy.get(".button-login");
    });
});
