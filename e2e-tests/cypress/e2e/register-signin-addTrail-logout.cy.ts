import "cypress-file-upload";

describe("Register, login, add-trail, logout functionalities", () => {
    let name: string = "John";
    let surname: string = "Doe";
    let email: string = `email${Date.now()}@example.com`;
    let username: string = `username${Date.now()}`;
    let password: string = "testPassword111*";
    beforeEach(() => {
        cy.visit("http://localhost:3000");
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
        let trailName: string = "Hunter's Footprint";
        let location: string = "Runmaro";
        let description: string =
            "You'll probably see a deer or two on the way.";
        let terrain: string = "Forest";
        let difficulty: string = "Medium";
        let imageUrl: string = "/img/trail-image.jpg";
        cy.get(".button-login:first").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get(".button-default").should("have.text", "Log in").click();
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
        cy.contains("Submit").click();
        cy.url().should("include", "/trail");
        cy.contains("Length");
        cy.contains(description);
    });

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
