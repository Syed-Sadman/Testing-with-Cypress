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
      cy.contains("Design & Pages").click();
      cy.wait("@cmsapi");

      cy.wait(15000);

      cy.get("#dorik-builder-iframe", { timeout: 10_000 }).should("be.visible");
    });

    cy.visit(
      "https://firstjantest.dorikio.com/dashboard/design/63b155b422e2960057a3fdd4"
    );

    cy.wait(12000);
    cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //////passed the test     .should('not.be.empty')--this can be used too

    for (let i = 0; i < 27; i++) {
      cy.get("#dorik-builder-iframe")
        .its("0.contentDocument")
        .within(($body) => {
          // cy.get(".dorik-section-aswwp93m").click({ position: "left" }); //section
          // cy.get(".dorik-heading-c44wu1fg").click({ position: "left" }); ////heading element general settings
          // cy.get(".dorik-heading-c44wu1fg").rightclick(); ///rightClick working fine and showing the contextmenu
          cy.get('[itemtype="section"]').eq(i).trigger("mouseover"); //section
          cy.get(".sc-fEXmlR").click(); //adding new section
          // cy.contains("Add New Section").click();
        });

      // Section modal is outsite the iFrame so I have to check outside the iFrame document
      cy.contains("Custom Section").click();
      cy.wait(2000);
      cy.get(".sc-hgRfpC").eq(0).click(); //arnob vai site class of section
      // cy.get(".sc-bjCGfv").eq(0).click(); // add new section with only one column my test site class
      cy.get("#dorik-builder-iframe")
        .its("0.contentDocument")
        .within(($body) => {
          // cy.get('[itemtype="section"]').eq(i + 1); //section
          cy.get(".dorik-bcs").click();
          // cy.contains("Add Element").click();
        });
      cy.wait(1000);
      cy.get(".sc-Dmqmp").eq(i).click();
    }
  });
});
