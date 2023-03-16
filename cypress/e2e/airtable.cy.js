describe("Airtable Test", () => {
  it("Airtable Grid Test", () => {
    cy.intercept({ method: "POST", url: "/Prod/v0/meta/bases" }).as(
      "airtablebase"
    );

    cy.session("username", () => {
      cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

      cy.wait("@authpass");

      cy.contains("Design & Pages").should("be.visible");
      cy.contains("Design & Pages").click();
      cy.wait("@cmsapi");

      cy.wait(15000);
      // cy.wait("@authpass");

      cy.get("#dorik-builder-iframe", { timeout: 10_000 }).should("be.visible");
    });

    cy.visit(
      "https://firstjantest.dcms.site/dashboard/design/63fda394096c4201d0f93735"
    );
    cy.wait(8000);

    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        cy.get('[itemtype="section"]').eq(1).trigger("mouseover"); //section
        cy.contains("Add New Section").click();
      });

    // Section modal is outsite the iFrame so I have to check outside the iFrame document
    cy.contains("Custom Section").click();
    cy.get(".sc-bjCGfv").eq(0).click(); // add new section with only one column
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        cy.contains("+ Add Element").click();
      });
    cy.get(".sc-itMJkM").eq(28).click();
    cy.get(".sc-gYpcnp").within(() => {
      cy.contains("Add New API Key").click();
    });
    cy.get(".ant-space-item").eq(1).click().type("keyF3m7fefUvMkw7t");
    cy.get(".ant-modal-footer").within(() => {
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.contains("Save").click();
      cy.wait("@cmsapi").then(({ response }) => {
        console.log(response.body, "test response");
      });
    });
    cy.wait(3000);

    cy.get(".ant-select-selector").eq(1).click();
    cy.wait("@airtablebase").then((res) => {
      expect(res.response.body.bases[0].name).to.eq("Dorik Airtable Templates");
      cy.log("SUCCESS");
    });
    cy.get(".rc-virtual-list-holder-inner")
      .eq(0)
      .find('[title="Dorik Airtable Templates"]')
      .click();

    cy.get(".ant-select-selector").eq(2).click();

    cy.wait(3000);
    cy.get(".rc-virtual-list-holder-inner")
      .eq(1)
      .find('[title="Grid"]')
      .click();
    cy.contains("Layout Configuration").should("be.visible");
    // .then((option) => {
    //   console.log(option, "option log of bases");
    // });
    // cy.contains("Select Base")
    //   .click({ force: true })
    //   .within(() => {
    //     cy.contains("Dorik syed");
    //   });
    // // cy.wait(2000);
    // // cy.contains("")
  });

  it("Airtable Details Test", () => {
    cy.intercept({ method: "POST", url: "/Prod/v0/meta/bases" }).as(
      "airtablebase"
    );

    cy.session("username", () => {
      cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

      cy.wait("@authpass");

      cy.contains("Design & Pages").should("be.visible");
      cy.contains("Design & Pages").click();
      cy.wait("@cmsapi");

      cy.wait(15000);
      // cy.wait("@authpass");

      cy.get("#dorik-builder-iframe", { timeout: 10_000 }).should("be.visible");
    });
    cy.visit(
      "https://firstjantest.dcms.site/dashboard/design/63fda394096c4201d0f93735"
    );
    cy.wait(8000);

    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        cy.get('[itemtype="section"]').eq(1).trigger("mouseover"); //section
        cy.contains("Add New Section").click();
      });

    // Section modal is outsite the iFrame so I have to check outside the iFrame document
    cy.contains("Custom Section").click();
    cy.get(".sc-bjCGfv").eq(0).click(); // add new section with only one column
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        cy.contains("+ Add Element").click();
      });
    cy.get(".sc-itMJkM").eq(27).click();
    cy.get(".sc-gYpcnp").within(() => {
      cy.contains("Add New API Key").click();
    });

    ///API key input & Save
    cy.get(".ant-space-item").eq(1).click().type("keyF3m7fefUvMkw7t");
    cy.get(".ant-modal-footer").within(() => {
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.contains("Save").click();
      cy.wait("@cmsapi").then(({ response }) => {
        console.log(response.body, "test response");
      });
    });
    cy.wait(3000);

    ///selecting airtable base
    cy.get(".ant-select-selector").eq(1).click();
    cy.wait("@airtablebase").then((res) => {
      expect(res.response.body.bases[3].name).to.eq("Airtable Templates");
      cy.log("SUCCESS");
    });
    cy.get(".rc-virtual-list-holder-inner")
      .eq(0)
      .find('[title="Airtable Templates"]')
      .click();

    //selecting table
    cy.get(".ant-select-selector").eq(2).click();

    cy.wait(3000);
    cy.get(".rc-virtual-list-holder-inner")
      .eq(1)
      .find('[title="Grid"]')
      .click();

    //selecting Layouts
    cy.get(".ant-select-selector").eq(3).click();

    cy.wait(3000);
    cy.get(".rc-virtual-list-holder-inner")
      .eq(2)
      .find('[title="Profile Details"]')
      .click();

    // cy.contains("Layout Configuration").should("be.visible");
    // .then((option) => {
    //   console.log(option, "option log of bases");
    // });
    // cy.contains("Select Base")
    //   .click({ force: true })
    //   .within(() => {
    //     cy.contains("Dorik syed");
    //   });
    // cy.wait(2000);
    // cy.contains("")
  });
});
