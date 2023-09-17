describe("Collection Creation Spec", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
  });
  it("passes", () => {
    cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
    cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
    cy.session("Dashboard", () => {
      // cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      // cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

      cy.wait("@authpass");
      cy.wait("@cmsapi");
    });

    cy.visit("https://firstjantest.dcms.site/dashboard");

    cy.wait("@cmsapi");
    cy.contains("+ Add New Collection");
    cy.contains("Projects").click();
    // cy.get('[title="None"]').click();
    // cy.get('[title="Course"]').click();
    // // cy.get('[id="singularName"]').type("test");
    // cy.get('[value="FULL_PAGE"]').click();
    // cy.get('[type="submit"]').click();

    // cy.get('[aria-label="setting"]');

    // //   .click();

    // ------test code from below

    // cy.contains("Listings").click();

    // cy.intercept(
    //   "POST",
    //   "https://custompredefrole101.dcms.site/api/cms",
    //   (res) => {
    //     console.log(res, "cms data");
    //   }
    // ).as("poststatus");

    // //topics get call

    // cy.intercept("GET", "/api/cms/topics?page=1&perPage=10", (res) => {
    //   console.log("waiting for topics to load data");
    // }).as("collectionwait");

    // cy.wait("@collectionwait");
    // console.log("collections fetched successfully ");

    // cy.intercept(
    //   "POST",
    //   "https://custompredefrole101.dcms.site/api/cms/topics?page=1&perPage=10",
    //   (res) => {
    //     console.log(res, "cms data");
    //   }
    // );

    //   -----------
    //   cy.contains("New Post").click();
    //   cy.get('[data-placeholder="Enter Your Title Here"]')
    //     .click()
    //     .type("test post 102");
  });
});
