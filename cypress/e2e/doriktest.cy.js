describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://dorik.com/");
    cy.contains("Try Dorik Now").click();
    cy.contains("Start from Scratch").click();
    cy.wait(2000);

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
