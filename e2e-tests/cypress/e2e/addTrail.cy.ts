import "cypress-file-upload";
import { loginFromHomePageAsFrodoBaggins } from "cypress/utils/login.utils";
import addTrail from "cypress/utils/addTrail.utils";

describe("Add trail functionalities", () => {
    const trailName = `trail-name-${Date.now()}`;
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
        loginFromHomePageAsFrodoBaggins();
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
