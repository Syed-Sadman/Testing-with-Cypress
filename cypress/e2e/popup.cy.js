describe("Popup test", () => {
  it("Contact form", () => {
    cy.visit("https://animationcmssiteformtest.dcms.site");
    cy.get(".popup-btn").eq(0).click();
    cy.get("#ggdd8rjr").should("be.visible");
    cy.get("#ggdd8rjr").within(($form) => {
      cy.intercept({ method: "POST", url: "/api/action/contact" }).as(
        "conformpass"
      );
      cy.get('input[name="email"]').type("john.doe@email.com");
      cy.get('input[name="subject"]').type("ldasjcldasjfl asjlfas ");
      cy.get('textarea[name="message"]').type("test fdasfasdfa ");
      cy.get('[type="submit"]').click();
      cy.wait("@conformpass").then(({ response }) => {
        expect(response.body.success).to.eq(true); //// need to set the value to true to check whether the request is successfull or not
        // console.log(response.body);
      });
    });
  });
  it("Subscription form ", () => {
    cy.visit("https://animationcmssiteformtest.dcms.site");

    cy.get(".popup-btn").eq(1).click();
    cy.get("#9n62a8nc").within(() => {
      cy.intercept({ method: "POST", url: "/Prod/create-contact" }).as(
        "subformpass"
      );
      cy.get("[type='email']").type("cecefffg@gmail.com");
      cy.get("[type='submit']").click();
      cy.wait("@subformpass").then(({ response }) => {
        expect(response.body.response.success).to.eq(true); //// need to set the value to true to check whether the request is successfull or not
        console.log(response.body, "body of sub form");
      });
    });
  });
});
