export default function loginFromHomePage(
    username: string,
    password: string
): void {
    cy.get(".button-login:first").click();
    cy.url().should("include", "/login");
    cy.contains("Log in.");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get(".button-default").should("have.text", "Log in").click();
}
