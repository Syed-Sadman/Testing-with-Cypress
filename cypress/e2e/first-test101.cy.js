describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://calendartest.dorik.io/");
    cy.contains("Tab 2").click();
  });
});
