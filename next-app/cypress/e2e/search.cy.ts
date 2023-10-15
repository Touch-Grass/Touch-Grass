describe("Search Bar Functionalities", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should be rendered", () => {
        cy.get("input").should("have.class", "hero-search-bar").click();
    });

    it("should perform a search", () => {
        cy.get("input").type("sandhamn");
        cy.get(".hero-search-button").click();
        cy.url().should("include", "search?l=sandhamn");
        cy.contains("trails in sandhamn");
    });

    // TODO: should also be able to search from search page.
});
