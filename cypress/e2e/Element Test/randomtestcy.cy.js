describe("session creation ", () => {
  it("ssss", () => {
    cy.visit("https://firstjantest.dcms.site/");

    cy.get('[data-cy="test"]');

    cy.get('[data-cy="countdown"]').within(() => {
      cy.contains("Days");
    });
  });
});
