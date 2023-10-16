import "cypress-file-upload";
import registerFromHomePage from "cypress/utils/register.utils";
import loginFromHomePage from "cypress/utils/login.utils";
import addTrail from "cypress/utils/addTrail.utils";

describe("Add trail functionalities", () => {
    const name: string = "John";
    const surname: string = "Doe";
    const email: string = `email${Date.now()}@example.com`;
    const username: string = `username${Date.now()}`;
    const password: string = "testPassword111*";

    const trailName = `trail-name-${username.slice(-10)}`;
    const location = "Runmaro";
    const description = "You'll probably see a deer or two on the way.";
    const terrain = "Forest";
    const difficulty = "Medium";
    const imageUrl = "/img/trail-image.jpg";

    beforeEach(() => {
        cy.visit("/");
    });

    it("should be able to add a new trail after logged in", () => {
        cy.clearCookies();
        // register a new account from home page
        registerFromHomePage(name, surname, email, username, password);
        // go to home page
        cy.get(".navbar-title").click();
        cy.wait(1000);
        cy.contains("You should ");
        // login with the new account
        loginFromHomePage(username, password);
        // create a new trail
        addTrail(
            trailName,
            location,
            description,
            terrain,
            difficulty,
            imageUrl
        );
    });
});
