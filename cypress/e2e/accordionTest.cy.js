describe("Accordion test", () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file!!!!!!");
  });
  it("passes", () => {
    cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
    cy.session("username", () => {
      cy.intercept({ method: "POST", url: "/api/auth" }).as("authpass");
      cy.intercept({ method: "POST", url: "/api/cms" }).as("cmsapi");
      cy.visit(`${Cypress.env("login_path")}${Cypress.env("auto_login")}`);

      cy.wait("@authpass");

      cy.contains("Design & Pages").should("be.visible");
      cy.contains("Design & Pages").click();
      cy.wait("@cmsapi");

      cy.wait(15000);
      // cy.wait("@authpass");

      cy.get("#dorik-builder-iframe", { timeout: 10_000 }).should("be.visible");
      cy.get("#dorik-builder-iframe").its("0.contentDocument").should("exist"); //////passed the test     .should('not.be.empty')--this can be used too

      // cy.get("#dorik-builder-iframe")
      //   .its("0.contentDocument")
      //   .within(($body) => {
      //     cy.get('[itemtype="section"]').eq(1).trigger("mouseover"); //section
      //     cy.contains("Add New Section").click();
      //   });

      // // Section modal is outsite the iFrame so I have to check outside the iFrame document
      // cy.contains("Custom Section").click();
      // cy.get(".sc-bjCGfv").eq(0).click(); // add new section with only one column
      // cy.get("#dorik-builder-iframe")
      //   .its("0.contentDocument")
      //   .within(($body) => {
      //     cy.contains("+ Add Element").click();
      //   });
      // cy.get(".sc-itMJkM").eq(1).click(); ////  .sc-itMJkM className of element div , so I'm selecting the first element which is Accordion eq(0)
    });

    cy.visit(
      "https://firstjantest.dcms.site/dashboard/design/63b155b422e2960057a3fdd4"
    );
    cy.wait(10000);
    // cy.get("#dorik-builder-iframe")
    //   .its("0.contentDocument")
    //   .within(($body) => {
    //     cy.get('[itemtype="section"]').eq(1).trigger("mouseover"); //section
    //     cy.contains("Add New Section").click();
    //   });
    // cy.contains("Custom Section").click();
    // cy.wait(2000);
    // cy.get(".sc-hgRfpC").eq(0).click();
    // cy.get("#dorik-builder-iframe")
    //   .its("0.contentDocument")
    //   .within(($body) => {
    //     cy.contains("+ Add Element").click();
    //   });
    // cy.get(".sc-Dmqmp").eq(1).click();
    cy.get("#dorik-builder-iframe")
      .its("0.contentDocument")
      .within(($body) => {
        cy.get(".dorik-contactForm-1ymwk687").click({ position: "left" }); ////heading element general settings
      });

    // // Section modal is outsite the iFrame so I have to check outside the iFrame document
    // cy.contains("Custom Section").click();
    // cy.get(".sc-bjCGfv").eq(0).click(); // add new section with only one column
    // cy.get("#dorik-builder-iframe")
    //   .its("0.contentDocument")
    //   .within(($body) => {
    //     cy.contains("+ Add Element").click();
    //   });
    // cy.get(".sc-itMJkM").eq(1).click(); ////  .sc-itMJkM className of element div , so I'm selecting the first element which is Accordion eq(0)

    // to expand the accordion body

    // cy.get("#dorik-builder-iframe")
    //   .its("0.contentDocument")
    //   .within(($body) => {
    //     cy.get("[itemtype='accordion'] > div > details").click({
    //       multiple: true,
    //     });
    //   });

    //Accordion tab in general settings

    // cy.get(".sc-ilhmMj").eq(0).click();

    //Accordion Styles
    // cy.get(".sc-ilhmMj").eq(4).click();
    //Heading styles

    //Content styles

    //Background

    //Contact form

    //Form configuration--------------------
    cy.log("Form configuration", 'color: "red"');
    cy.get(".sc-ilhmMj")
      .eq(0)
      .click()
      .within(() => {
        cy.contains("Send To");
        //checking if all the options are available in the builder
        cy.get("select")
          .children("option")
          .then((options) => {
            const actual = [...options].map((o) => o.value);
            expect(actual).to.deep.eq([
              "email",
              "zapier",
              "integromat",
              "pabbly",
            ]);
          });
      });

    //Fields--------------------

    cy.get(".sc-ilhmMj")
      .eq(1)
      .click()
      .within(() => {
        cy.contains("Name");
        cy.contains("Email");
        cy.contains("Phone");
        cy.contains("Subject");
        cy.contains("Message");
      });

    //Form Style

    cy.get(".sc-ilhmMj")
      .eq(2)
      .click()
      .within(() => {
        cy.contains("Gap Between Fields");
        cy.get(".sc-brePNt").click().clear().type("23px"); // accessing the class of gap property and setting input value to 29px
        cy.get(".sc-jNJNQp").click().clear().type("#2E57BE"); //accessing the class of background color
      });

    //Input label style--------------------

    // cy.get(".sc-ilhmMj")
    //   .eq(3)
    //   .click()
    //   .within(() => {
    //     cy.contains("Color");
    //     cy.contains("Text Size");
    //   });

    //Input field style--------------------

    // cy.get(".sc-ilhmMj")
    //   .eq(4)
    //   .click()
    //   .within(() => {
    //     cy.contains("Color");
    //     cy.contains("Text Size");
    //     cy.contains("Padding");
    //     cy.contains("Input Fields Height");
    //     cy.contains("Border & Radius");
    //     cy.contains("Background");
    //   });

    //Button text & style--------------------

    // cy.log("Button text & style");
    // cy.get(".sc-ilhmMj")
    //   .eq(5)
    //   .click()
    //   .within(() => {
    //     cy.contains("Button Text");
    //     cy.contains("Color");
    //     cy.contains("Text Size");
    //     cy.contains("Spacing & Alignment");
    //     cy.contains("Border & Radius");
    //     cy.contains("Background");
    //   });

    // Test on published End to ensure the changed properties are reflecting on published end

    cy.contains("Publish").click();
    cy.wait("@cmsapi");
    cy.wait(2000);
    // cy.get('[data-icon="external-link"]').click();
    cy.visit("https://firstjantest.dcms.site?revalidate=true");

    cy.get(".form-group > input").should("have.css", "margin-bottom", "23px");

    cy.get("#1ymwk687").should(
      "have.css",
      "background-color",
      "rgb(46, 87, 190)"
    );
  });
});

// cy.get(".DraftEditor-editorContainer").click().type("test typing");////for typing text inside heading element
