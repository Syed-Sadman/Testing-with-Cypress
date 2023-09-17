describe("session creation ", () => {
  it("ssss", () => {
    // cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
    // cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");

    cy.session("username", () => {
      cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      // cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

      cy.wait("@authpass");

      cy.contains("Design & Pages").should("be.visible");
    });
    cy.viewport(1400, 720);
    cy.visit(`${Cypress.env("cms_site")}/post/ccdafasdcasdfasdfa`);
    cy.wait(4000);
    cy.get(".anticon-setting").click();
    cy.get(".ant-drawer-wrapper-body").within(() => {
      cy.contains("Slug");
    });
    cy.get(".ant-collapse-item")
      .eq(0)
      .within(() => {
        cy.get('input[id="meta_title"]').type("test title");
      });
    cy.get(".anticon-link");
  });
});
