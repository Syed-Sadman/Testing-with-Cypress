describe("empty spec", () => {
  it("passes", () => {
    cy.viewport(1440, 800);
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="username"]').type("sadman.syed@yahoo.com");
    cy.get('input[name="password"]').type("s1a2d3m4a5n6", { sensitive: true });
    cy.get('[type="submit"]').click();

    cy.get('[type="circle"]').click();
    cy.wait(3000);
    cy.contains("Admin Panel").click();
    cy.contains("Static Websites").click();

    // cy.contains("Dorik CMS").click();
    // cy.wait(3000);
    // cy.contains("Goto CMS Dashboard").eq(0).click();
    // cy.get("iframe[src*=recaptcha]")
    //   .its("0.contentDocument")
    //   .should((d) => d.getElementById("recaptcha-token").click());
  });
});
