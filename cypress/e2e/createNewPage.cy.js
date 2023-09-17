describe("empty spec", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
  });
  it("passes", () => {
    cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

    cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
    cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");

    cy.wait("@authpass");

    cy.contains("Design & Pages").should("be.visible").click();

    cy.wait("@cmsapi");
    // cy.wait("@authpass");

    cy.wait(15000);
    cy.get('[data-icon="file"]').should("be.visible");

    cy.get('[data-icon="file"]').click();
    cy.contains("Autosection").click();

    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        cy.contains("Add New Section").click();
        cy.wait(5000);
      });
    cy.contains("Custom Section").click();
    // cy.get(".GPCCe").click();
  });
});

// data-testid="tooltip-wrap"
