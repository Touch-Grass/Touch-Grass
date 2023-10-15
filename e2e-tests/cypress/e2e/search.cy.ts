describe("Search functionalities", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should be rendered", () => {
        cy.get("input").should("have.class", "hero-search-bar").click();
    });

    it("should be able to perform searches both from home page and search page", () => {
        cy.get("input").type("sandhamn");
        cy.get(".hero-search-button").click();
        cy.url().should("include", "search?l=sandhamn");
        cy.contains("trails in sandhamn");
        cy.get("input")
            .should("have.class", "search-page-input")
            .clear()
            .type("Stockholm");
        cy.get(".button-search").click();
        cy.url().should("include", "search?l=Stockholm");
        cy.contains("trails in Stockholm");
    });
});
