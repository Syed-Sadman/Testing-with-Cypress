describe("empty spec", () => {
  it("passes", () => {
    cy.viewport(1440, 800);
    cy.intercept("POST", "https://api.dorik.dev/graphql", (req) => {
      const requestBody = req.body;
      // if (requestBody.includes("login")) {

      const queryNameMatch = requestBody.query.match(/query\s+(\w+)/);
      const queryName = queryNameMatch ? queryNameMatch[1] : null;
      const mutationNameMatch = requestBody.query.match(/mutation\s+(\w+)/);
      const mutationName = mutationNameMatch ? mutationNameMatch[1] : null;
      console.log(queryName, "req body matched");
      console.log(mutationName, "req ");

      if (queryName === "login") {
        req.reply({
          fixture: "loginMock.json",
          statusCode: 300,
        });
      } else if (mutationName === "refreshToken") {
        req.reply({
          fixture: "refreshTok.json",
          statusCode: 200,
        });
      } else {
        req.continue();
      }
      // } else {
      //   req.continue();
      // }
    }).as("profilemock");
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="email"]').type("sadman.syed@yahoo.com");
    cy.get('input[name="password"]').type("s1a2d3m4a5n6", { sensitive: true });
    cy.wait(2000);
    cy.get('[type="submit"]').click();

    // cy.get('[type="circle"]').click();
    cy.wait(5000);
    cy.contains("CMS");
    // cy.contains("Admin Panel").click();
    // cy.contains("Static Websites").click();

    // cy.contains("Dorik CMS").click();
    // cy.wait(3000);
    // cy.contains("Goto CMS Dashboard").eq(0).click();
    // cy.get("iframe[src*=recaptcha]")
    //   .its("0.contentDocument")
    //   .should((d) => d.getElementById("recaptcha-token").click());
  });
});
