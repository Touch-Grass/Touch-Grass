export default function registerFromHomePage(
    name: string,
    surname: string,
    email: string,
    username: string,
    password: string
): void {
    cy.get(".button-signin").click();
    cy.url().should("include", "/register");
    cy.contains("Sign up.");
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="surname"]').type(surname);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="passwordRepeat"]').type(password);
    cy.get(".button-default").should("have.text", "Register").click();
}
