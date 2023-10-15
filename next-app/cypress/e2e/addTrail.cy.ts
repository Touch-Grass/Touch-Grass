import "cypress-file-upload";

describe("Add trail functionalities", () => {
    let name: string = "Hunter's Footprint";
    let location: string = "Runmaro";
    let description: string = "You'll probably see a deer or two on the way.";
    let terrain: string = "Forest";
    let difficulty: string = "Medium";
    let imageUrl: string = "/img/trail-image.jpg";
    beforeEach(() => {
        cy.visit("http://localhost:3000/add-trail");
    });

    it("should be able to add a new trail", () => {
        cy.get(".button-login").then(($button) => {
            if ($button.length > 0) {
                cy.get(".button-login").click();
            }
        });
        cy.get('input[name="name"]').type(name);
        cy.get('input[name="location"]').type(location);
        cy.get('textarea[name="description"]').type(description);
        cy.get('select[name="terrain"]').select(terrain);
        cy.get('select[name="difficulty"]').select(difficulty);
        cy.get('input[type="file"]').attachFile(imageUrl);
        cy.get(".trail-creator-view").click("center");
        cy.get(".trail-creator-view").click("right");
        cy.contains("Submit").click();
    });
});
