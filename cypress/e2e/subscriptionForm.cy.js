describe("My First Test", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://sqasyedtest101.dorik.io");
    for (let i = 0; i < 2; i++) {
      cy.get("form").eq(i).type("fvteected@gmail.com").submit();
      cy.wait(5000);
    }

    // cy.contains("Cypresslink101").click();
  });
});

// login auth
