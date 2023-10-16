import "cypress-file-upload";
import { loginFromHomePageAsFrodoBaggins } from "cypress/utils/login.utils";

describe("Comments functionalities", () => {
    const commentTitle = `comment-title-${Date.now()}`;
    const commentText = `comment-text-${Date.now()}`;

    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to leave comments", () => {
        cy.clearCookies();
        loginFromHomePageAsFrodoBaggins();
        cy.get(".featured-trail-image").first().click();
        cy.contains("Comments");
        cy.get('input[type="text"][name="title"]').type(commentTitle);
        cy.get(
            'textarea.add-comment-main-text[placeholder="What do you think about the trail?"]'
        ).type(commentText);
        cy.get('button.button-default[title="Submit"]').click();
        cy.wait(1000);
        cy.get("div.comment-title").contains(commentTitle);
        cy.get("div.comment-text").contains(commentText);
        cy.get("div.user-representation-name").contains("RingBearer");
    });
});
