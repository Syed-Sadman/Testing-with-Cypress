beforeEach(() => {
  cy.log("I run before every test in every spec file!!!!!!");
  cy.visit("https://allelementtestprod201.dcms.site");
});

describe("Accordion", () => {
  it("Passed", () => {
    cy.get(".dorik-accordion-xf1breje").should("be.visible");
  });
});

describe("Contact Form", () => {
  it("Passed", () => {
    cy.get("#snhqj2pp").should("be.visible");
    cy.get("#snhqj2pp").within(($form) => {
      cy.intercept({ method: "POST", url: "/api/action/contact" }).as(
        "conformpass"
      );
      cy.get('input[name="email"]').type("john.doe@email.com");
      cy.get('input[name="subject"]').type("ldasjcldasjfl asjlfas ");
      cy.get('textarea[name="message"]').type("test fdasfasdfa ");
      cy.get('[type="submit"]').click();
      cy.wait("@conformpass").then(({ response }) => {
        expect(response.body.success).to.eq(false); //// need to set the value to true to check whether the request is successfull or not
      });
    });
  });
});

describe("Content Slider", () => {
  it("Passed", () => {
    cy.get(".content__slider").should("be.visible");
  });
});

describe("Countdown Timer", () => {
  it("Passed", () => {
    // cy.visit("https://allelementtestprod201.dcms.site");
    cy.get(".counter-wrapper").should("be.visible");
  });
});

describe("Counter Circle", () => {
  it("Passed", () => {
    cy.get(".counter-wrapper").should("be.visible");
  });
});

describe("Code block", () => {
  it("Passed", () => {
    cy.get(".dorik-code-x0nbz1hw").should("be.visible");
  });
});

describe("Custom Form", () => {
  it("Passed", () => {
    cy.get("#swvxjhqi").should("be.visible");
  });
});

describe("Heading", () => {
  it("Passed", () => {
    cy.get(".dorik-heading").should("be.visible");
  });
});

describe("Horizontal line", () => {
  it("Passed", () => {
    cy.get(".dorik-line-kl6jhvq7").should("be.visible");
  });
});

describe("Icon", () => {
  it("Passed", () => {
    cy.get(".dorik-icon").should("be.visible");
  });
});

describe("Icon and Text", () => {
  it("Passed", () => {
    cy.get(".dorik-iconText-c1x5elpo").should("be.visible");
  });
});

/////Have to deal with iFrame in a different approach

describe("iFrame", () => {
  it("Passed", () => {
    cy.get(".dorik-iframe").should("be.visible");
  });
});

describe("Image", () => {
  it("Passed", () => {
    cy.get(".dorik-image-7fw330o3").should("be.visible");
  });
});

describe("Image Gallery", () => {
  it("Passed", () => {
    cy.get(".dorik-imageGallery-fgkk5w0q").should("be.visible");
  });
});

describe("Image Slider", () => {
  it("Passed", () => {
    cy.get(".dorik-imageSlider-01k1rt2j").should("be.visible");
  });
});

describe("Links", () => {
  it("Passed", () => {
    cy.get(".dorik-links-ewo1hnzj").should("be.visible");
  });
});

describe("List items", () => {
  it("Passed", () => {
    cy.get(".dorik-lists-joxusnze").should("be.visible");
  });
});

// Navbar tests----1.need to test the links working or not 2. logo visible or not 3. button visible or not

describe("Navbar", () => {
  it("Passed", () => {
    cy.get(".dorik-nav-5pyyp303").should("be.visible");
  });
});

describe("Payment Button", () => {
  it("Passed", () => {
    cy.get("#dorik-jdf8g4ex").should("be.visible");
  });
});

describe("Progressbar", () => {
  it("Passed", () => {
    cy.get(".dorik-progressbar-aucoaf2p").should("be.visible");
  });
});

describe("Regular Button", () => {
  it("Passed", () => {
    cy.get(".dorik-button-em48agmb").should("be.visible");
  });
});

describe("Social Icon", () => {
  it("Passed", () => {
    cy.get(".dorik-socialIcon-0w16az3k").should("be.visible");
  });
});

describe("Subscription Form", () => {
  it("Passed", () => {
    cy.get("#klksktmy").should("be.visible");
    cy.get("#klksktmy").within(($form) => {
      cy.intercept({ method: "POST", url: "/Prod/create-contact" }).as(
        "subformpass"
      );
      cy.get('input[name="email"]').type("john.decaoe@gmail.com");
      cy.get('input[name="firstName"]').type("ldaadsfasdsjcldasjfl asjlfas ");
      cy.get('[type="submit"]').click();
      cy.wait("@subformpass").then(({ response }) => {
        // expect(response.body.success).to.eq(true); //// need to set the value to true to check whether the request is successfull or not
        console.log(response.body, "body of sub form");
      });
    });
  });
});

describe("Tabs", () => {
  it("Passed", () => {
    cy.get(".dorik-tabs-2je2s55z").should("be.visible");
  });
});

describe("Testimonial Slider", () => {
  it("Passed", () => {
    cy.get(".dorik-testimonialSlider-vbtqjxjj").should("be.visible");
  });
});

describe("Text", () => {
  it("Passed", () => {
    cy.get(".dorik-text-c50pcryt").should("be.visible");
  });
});

describe("Video", () => {
  it("Passed", () => {
    cy.get(".dorik-video-mioyj3i4").should("be.visible");
  });
});

// describe("Airtable Grid", () => {
//   it("Passed", () => {
//     cy.get(".dorik-jdf8g4ex").should("be.visible");
//   });
// });
