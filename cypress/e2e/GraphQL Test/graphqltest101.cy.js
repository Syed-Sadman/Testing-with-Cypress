describe("GraphQL Request", () => {
  it("should make a request to a GraphQL API", () => {
    // Define the GraphQL API endpoint
    const apiUrl = "https://api-v4.dorik.dev/graphql";

    // Define the GraphQL query or mutation
    const graphqlQuery = `
        query {
            query page($id: ID!) {
                page(id: $id) { id data }
            }
        }
      `;

    // Make the GraphQL request using cy.request()
    cy.request({
      method: "POST",
      url: apiUrl,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDhmODZmNmIzNGNmMDAxZTcwZmE2YSIsInBsYXRmb3JtIjoiZG9yaWsiLCJzaXRlSWQiOiI2MTIzZWU1MzA4ZjE3ODgyYzVkZDExNDMiLCJzdGF0dXMiOiJhY3RpdmUiLCJyb2xlIjoic3lzX2FkbWluIiwicGxhbiI6IkFHRU5DWV8yNSIsImlhdCI6MTcwNTIyMjUyOSwiZXhwIjoxNzA1MjIyODI5fQ.a1tYoNpfe9sbCSx86LIM7nJbzTOsyTDlQSToCnSw2S414ScTi6AwvoxtZCFsQ1qqmEaxsqcEziThYMdRVpFYl3pl7Xc3ylRxBV3jYn43vVwkqt-j1KjvOzC7ogGbCMYKfSLUwxpCmEdbMJvpZFcF2Wm5XW5_9s2rSxIbaK0COjgyNF3yZl5LoqEMK6u5gCq_o1pOsuiiN0mfkVEoOUmysljuPbSkxGlITmVvs8maqibrbkO15tvJa6fF1jIwc79Sh63PiERjzdPk5NGvHEfX9LoJMBd41OZ9soeTuVtQ0jKMvMXMlyGel2tgSi9-deRdxCY40T_GPdlORtHDuZnw9Q2gAyw8TD2ekX5QEfMhYqxy7CGWOJxQchPoK0uZl45b_KoMjSB4dJtuA_qLAtEzmd8tV2_r92Zfavt9uKdDXyxImWIM3zijUOO7O8tRY6qx3ItzkX0cKKiTJBUdhsjEAOLWGDdHK8AmqP6XOMLZ0qGoPq6GnkESxCFbbZKr7h0O79gIJZgib45ccYVfT1eD6R4hBkh0Ly6_cMHz9lPknyO3a39XI_E14578ee4JGtgrbxyX7xeJODs-vy2Wa0qw1OuScL9yo3iOgx5EzU6wWnMGaS9GBNYoCp-jI7YC0KYK2X-5eMDm_3-SQb8wQmPtQJMgEzy4Wk1Ga_wI0dx96oU", // Add any authorization token if needed
        // Add any other headers as needed
      },
      body: {
        query: `
        query page($id: ID!) {
            page(id: $id) { id data }
        }
       `,
        variables: {
          id: "6587cfa80c35ed001f99d416",
          //   page: {},
        },
      },
      // Add any variables or other request parameters as needed
    });

    cy.intercept("POST", apiUrl, (req) => {
      // Access the request payload
      //   const requestBody = req.body;

      // Check if the GraphQL query contains a specific string or structure
      //   if (requestBody.includes("page")) {
      // Modify the response
      req.reply({
        fixture: "pageData.json",
        statusCode: 500,
      });
      //   } else {
      // Continue with the original response if the query doesn't match
      // req.continue();
      //   }
    }).as("graphqlRequest");

    // Continue with other actions if needed
    // cy.get("#someElement").click();
  });
});
