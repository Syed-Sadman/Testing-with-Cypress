describe("My First Test", () => {
  it('clicks the link "type"', () => {
    // cy.visit("https://subscriptiontest201syed.dorikdomain.com");
    cy.visit("https://subscriptiontest201syed3231.agency.dorik.dev");
    for (let i = 0; i < 14; i++) {
      cy.get('[type="email"]').eq(i).type("grf5dfeefted@gmail.com");

      cy.wait(1000);
    }
    cy.get('[type="submit"]').click({ multiple: true });

    // cy.contains("Cypresslink101").click();
  });
});

// login auth

// previous test subscription  https://sqasyedtest101.dorik.io
