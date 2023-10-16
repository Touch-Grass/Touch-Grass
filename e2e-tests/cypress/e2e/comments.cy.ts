import "cypress-file-upload";
import registerFromHomePage from "cypress/utils/register.utils";
import loginFromHomePage from "cypress/utils/login.utils";

describe("Comments functionalities", () => {
    const name: string = "John";
    const surname: string = "Doe";
    const email: string = `email${Date.now()}@example.com`;
    const username: string = `username${Date.now()}`;
    const password: string = "testPassword111*";
    const commentTitle = `comment-title-${username.slice(-10)}`;
    const commentText = `comment-text-${username}`;

    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to leave comments", () => {
        cy.clearCookies();
        // register a new account from home page
        registerFromHomePage(name, surname, email, username, password);
        // go to home page
        cy.get(".navbar-title").click();
        cy.wait(1000);
        cy.contains("You should ");
        // login with the new account
        loginFromHomePage(username, password);
        // go to a featured trail page
        cy.get(".featured-trail:first").click();
        cy.contains("Comments");
        cy.get('input[type="text"][name="title"]').type(commentTitle);
        cy.get(
            'textarea.add-comment-main-text[placeholder="What do you think about the trail?"]'
        ).type(commentText);
        cy.get('button.button-default[title="submit"]').click();
        cy.wait(1000);
        cy.get("div.comment-title").contains(commentTitle);
        cy.get("div.comment-text").contains(commentText);
        cy.get("div.user-representation-name").contains(username);
    });
});
