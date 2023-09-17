describe("empty spec", () => {
  it("passes", () => {
    cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

    cy.intercept(
      "POST",
      "https://custompredefrole101.dcms.site/api/auth",
      (res) => {
        console.log(res, "cms data");
      }
    ).as("authpass");

    cy.wait("@authpass");

    cy.contains("Posts").click();

    cy.intercept(
      "POST",
      "https://custompredefrole101.dcms.site/api/cms",
      (res) => {
        console.log(res, "cms data");
      }
    ).as("poststatus");

    cy.wait("@poststatus");

    // cy.intercept(
    //   "POST",
    //   "https://custompredefrole101.dcms.site/api/cms/topics?page=1&perPage=10",
    //   (res) => {
    //     console.log(res, "cms data");
    //   }
    // );

    cy.contains("New Post").click();

    // cy.contains()
    ///// testing .then promise
    // cy.get("iframe").should((iframe) =>
    //   expect(iframe.contents().find("body").to.exist)
    //     .then((iframe) => cy.wrap(iframe.contents().find("body")))
    //     .within({}, ($iframe) => {
    //       cy.get("input").type("fake@email.com");
    //     })
    // );
  });
});
