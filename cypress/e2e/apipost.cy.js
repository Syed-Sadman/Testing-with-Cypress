describe("empty spec", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
  });
  it("passes", () => {
    cy.session("username", () => {
      cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

      cy.wait("@authpass");

      cy.contains("Design & Pages").should("be.visible");
      cy.contains("Posts");
    });

    cy.contains("New Post").click();
    cy.get('[data-placeholder="Enter Your Title Here"]')
      .click()
      .type("test post 102");

    // cy.wait(1000);
    // cy.get('[data-placeholder="Let`s write an awesome story!"]')
    //   .click()
    //   .type("test post 102");
  });
});
