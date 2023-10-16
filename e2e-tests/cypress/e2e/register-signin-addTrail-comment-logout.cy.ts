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
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.contains(name);
        cy.contains("New trail").click();
        cy.get('input[name="name"]').type(trailName);
        cy.get('input[name="location"]').type(location);
        cy.get('textarea[name="description"]').type(description);
        cy.get('select[name="terrain"]').select(terrain);
        cy.get('select[name="difficulty"]').select(difficulty);
        cy.get('input[type="file"]').attachFile(imageUrl);

        cy.get(".trail-creator-view").then(($element) => {
            const width = $element.width();
            const height = $element.height();

            const relativeX1 = width * 0.3;
            const relativeY1 = height * 0.3;
            const relativeX2 = width * 0.6;
            const relativeY2 = height * 0.6;
            const relativeX3 = width * 0.9;
            const relativeY3 = height * 0.9;

            cy.wrap($element).click(relativeX1, relativeY1);
            cy.wrap($element).click(relativeX2, relativeY2);
            cy.wrap($element).click(relativeX3, relativeY3);
        });
        // .then(() => {
        //     cy.get(".add-trail-page-creator-stats").within(() => {
        //         cy.contains("Current Length")
        //             .next()
        //             .invoke("text")
        //             .then((lengthText) => {
        //                 const length = lengthText.split("km")[0].trim();
        //                 cy.wrap(length).should("not.eq", "0.0");
        //             });

        //         cy.contains("Current Duration")
        //             .next()
        //             .invoke("text")
        //             .then((durationText) => {
        //                 const duration = durationText.trim();
        //                 cy.wrap(duration).should("not.eq", "0h0m");
        //             });
        //     });
        // });

        cy.contains("Submit").click();
        cy.url().should("include", "/trail");
        cy.contains("Length");
        cy.contains(description);
    });

    it("should be able to leave comments", () => {
        const commentTitle = `comment-title-${username.slice(-10)}`;
        const commentText = `comment-text-${username}`;
        cy.get(".button-login:first").click();
        cy.url().should("include", "/login");
        cy.contains("Log in.");
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get(".button-default").should("have.text", "Log in").click();
        cy.get(".featured-trail:first").click();
        cy.contains("Comments");
        cy.get('input[type="text"][name="title"]').type(commentTitle);
        cy.get(
            'textarea.add-comment-main-text[placeholder="What do you think about the trail?"]'
        ).type(commentText);
        cy.get('button.button-default[title="submit"]').click();
        cy.get("div.comment-title").contains(commentTitle);
        cy.get("div.comment-text").contains(commentText);
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
