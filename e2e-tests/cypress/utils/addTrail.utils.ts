export default function addTrail(
    trailName: string,
    location: string,
    description: string,
    terrain: string,
    difficulty: string,
    imageUrl: string
): void {
    cy.contains("New trail").click();
    cy.get('input[name="name"]').type(trailName);
    cy.get('input[name="location"]').type(location);
    cy.get('textarea[name="description"]').type(description);
    cy.get('select[name="terrain"]').select(terrain);
    cy.get('select[name="difficulty"]').select(difficulty);
    cy.wait(1000);
    cy.get('input[type="file"]').attachFile(imageUrl);
    cy.wait(1000);
    cy.get(".trail-creator-view")
        .then(($element) => {
            const ratios = [0.2, 0.4, 0.6, 0.7, 0.8];
            const width = $element.width();
            const height = $element.height();
            for (const ratioX of ratios) {
                for (const ratioY of ratios) {
                    cy.wrap($element).click(width * ratioX, height * ratioY);
                }
            }
        })
        .then(() => {
            cy.get(".add-trail-page-creator-stats").within(() => {
                cy.contains("Current Length")
                    .next()
                    .invoke("text")
                    .then((lengthText) => {
                        const length = lengthText.trim();
                        cy.wrap(length).should("not.eq", "0.0km");
                    });

                cy.contains("Current Duration")
                    .next()
                    .invoke("text")
                    .then((durationText) => {
                        const duration = durationText.trim();
                        cy.wrap(duration).should("not.eq", "0h0m");
                    });
            });
        });
    cy.wait(1000);
    cy.contains("Submit").click();
    cy.url().should("include", "/trail");
    cy.contains("Length");
    cy.contains("Duration");
    cy.contains(terrain);
    cy.contains(description);
}
