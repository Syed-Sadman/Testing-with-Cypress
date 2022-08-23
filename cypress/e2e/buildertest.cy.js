describe("empty spec", () => {
  it("passes", () => {
    cy.viewport(1440, 800);
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="username"]').type("sadman.syed@yahoo.com");
    cy.get('input[name="password"]').type("s1a2d3m4a5n6", { sensitive: true });
    cy.get('[type="submit"]').click();
    cy.contains("+ New Website").click();
    cy.contains("Start from Scratch").click();
    cy.get("iframe").should((iframe) =>
      expect(iframe.contents().find("body").to.exist)
        .then((iframe) => cy.wrap(iframe.contents().find("body")))
        .within({}, ($iframe) => {
          cy.get("input").type("fake@email.com");
        })
    );
  });
});
