describe("Animation test", () => {
  it("Animation test", () => {
    cy.visit("https://animationcmssiteformtest.dcms.site");

    cy.get(".dorik-row-gsd94hl5-wrapper")
      .scrollIntoView()
      .should("be.visible")
      .should("not.have.class", "aos-animate")
      .wait(600) // Wait for the animation to complete
      .should("have.class", "aos-animate");

    // cy.contains("Cypresslink101").click();
  });
});
