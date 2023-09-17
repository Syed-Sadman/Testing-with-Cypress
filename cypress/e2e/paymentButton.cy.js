describe("Payment Button test", () => {
  
  it("Paypal test", () => {
    cy.viewport(1280, 720);
    cy.visit("https://paypal-test.dcms.site");
    cy.wait(5000);
    cy.get("#dorik-4i9bmzyj").within(() => {
      cy.get("iframe")
        .eq(0)
        .its("0.contentDocument")
        .within(() => {
          cy.get('[data-funding-source="paypal"]').click();
        });
    });
  });


  it("Paddle test", () => {
    cy.viewport(1280, 720);
    cy.visit("https://paypal-test.dcms.site");
    cy.get(".paddle_button").eq(0).click({ force: true });
  });


  it("Stripe test", () => {
    cy.visit("https://paypal-test.dcms.site");
    cy.get("#dorik-708i57ak").click({ force: true });
  });

  it("Gumroad test", () => {
    cy.visit("https://cjnsakjcaksdjslafjasd.dcms.site");
    cy.get(".dorik-paymentWidgets-03536jlh").click();
  });
});
