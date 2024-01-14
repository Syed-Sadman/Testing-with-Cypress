// describe("Collection Creation Spec", () => {
//   beforeEach(() => {
//     cy.log("I run before every test in every spec file!!!!!!");
//   });
//   it("passes", () => {
//     cy.intercept("POST", "/graphql", (req) => {
//       if (req.body.operationName === "profile") {
//         console.log("req matched");
//         req.reply({ profile: "mockData.json" });
//       }
//     });

//     cy.visit("https://app.dorik.dev/login");

//     cy.get('input[name="email"]').type("sadman.syed@yahoo.com");
//     cy.get('input[name="password"]').type("s1a2d3m4a5n6", { sensitive: true });
//     cy.get('[type="submit"]').click();

//     // cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
//     // cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");

//     // cy.intercept(
//     //   "POST",
//     //   "https://custompredefrole101.dcms.site/api/cms/topics?page=1&perPage=10",
//     //   (res) => {
//     //     console.log(res, "cms data");
//     //   }
//     // );

//     //   -----------
//     //   cy.contains("New Post").click();
//     //   cy.get('[data-placeholder="Enter Your Title Here"]')
//     //     .click()
//     //     .type("test post 102");
//   });
// });
describe("E2E Test with Mocked Data", () => {
  it("should display mocked data", () => {
    // Start Cypress server and open the browser
    cy.visit("https://app.dorik.dev/login");

    // Intercept the API request and respond with mocked data
    cy.intercept("POST", "https://api.dorik.dev/graphql", {
      fixture: "mockedData.json", // Assuming you have a fixture file with mocked data
    }).as("getData");

    // cy.intercept("POST", "https://www.google.com/recaptcha/api2", {
    //   fixture: "mockedData.json", // Assuming you have a fixture file with mocked data
    // }).as("getData");

    cy.intercept("POST", "https://api.dorik.dev/graphql", (req) => {
      req.reply({
        fixture: "profileMock.json",
        statusCode: 200,
      });
    }).as("profilemock");

    cy.intercept("POST", "https://www.google.com/recaptcha/api2", (req) => {
      req.reply({
        fixture: "mockedData.json",
        statusCode: 200,
      });
    }).as("captchareq");

    // Perform actions that trigger the API request (e.g., click a button)
    cy.get('input[name="email"]').type("sadman.syed@yahoo.com");
    cy.get('input[name="password"]').type("s1a2d3m4a5n6", { sensitive: true });
    cy.get('[type="submit"]').click();
    cy.wait("@captchareq");
    cy.wait(8000);
    // Wait for the API request to be intercepted and respond
    cy.wait("@getData").then((interception) => {
      // Assert on the intercepted request, if needed
      console.log(interception, "test");
      expect(interception.response.statusCode).to.eq(200);
    });

    cy.wait("@profilemock");

    // Assert on the UI that displays the mocked data
    // cy.get("#displayedData").should("contain", "Mocked Data");
  });
});
