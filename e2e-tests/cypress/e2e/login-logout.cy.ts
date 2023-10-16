import "cypress-file-upload";
import registerFromHomePage from "cypress/utils/register.utils";
import { loginFromHomePageAsFrodoBaggins } from "cypress/utils/login.utils";

describe("Login, logout functionalities", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to log in and log out from home page", () => {
        cy.clearCookies();
        loginFromHomePageAsFrodoBaggins();
        cy.get(".user-icon-profile-pic").click();
        cy.contains("Log Out").click();
        cy.wait(1000);
        cy.get(".button-signin");
        cy.get(".button-login");
    });
});
