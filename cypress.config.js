const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl:
    experimentalSessionAndOrigin: true,
  },
  env: {
    login_path:
      "https://firstjantest.dcms.site/dashboard/auth/login?auto_login=",
    // "https://cctest201.dcms.site/dashboard/auth/login?auto_login=", /// Prod site
    // "https://testsitetype102.dorik.dev/dashboard/auth/login?auto_login=",///dev site
    auto_login:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybSI6ImRvcmlrIiwic2l0ZUlkIjoiNjE1YjFkM2NhZGQ2ZDI1MTYzNTgyYzI1IiwiZW1haWwiOiJzYWRtYW4uc3llZEBnbWFpbC5jb20iLCJpYXQiOjE2ODI5NDQzODQsImV4cCI6MTY4Mjk0NDY4NH0.FuuhUcNrFEuT_ihDtJv7obyOOgCaaFY4XdES0rvltuQ",
    products_url: "/products",
    cms_site: "https://cctest201.dcms.site/dashboard",
    // static_site: "https://allelementtestsyedsadman.dorik.io",
  },
  // video: true,

  // animationDistanceThreshold: 5,	The distance in pixels an element must exceed over time to be considered animating.

  waitForAnimations: true,
  chromeWebSecurity: false,

  // includeShadowDom: true,
});
