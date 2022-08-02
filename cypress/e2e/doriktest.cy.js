describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://dorik.com/");
    cy.contains("Try Dorik Now").click();
    cy.contains("Start from Scratch").click();
    cy.wait(2000);

    // cy.get("#dorik-builder-iframe").contains("+ Add New Section");
    // const ifdorik=document.getElementById("")
    // cy.document();
    // contains("+ Add New Section").click();

    // reference to iframe with id 'ifrm'

    // cy.window();
    cy.document().then(() => {
      // const iframe = document.querySelector("#dorik-builder-iframe");
      cy.get("#dorik-builder-iframe").get("button");
      // const innerDoc = iframe.contentDocument || iframe.contentWindow.document;

      // const divrot = innerDoc.querySelector(".frame-root");
      // console.log(innerDoc);
    });
    // .then(() => {
    //   var ifrm = document.getElementById("dorik-builder-iframe");
    //   var doc = ifrm.contentDocument
    //     ? ifrm.contentDocument
    //     : ifrm.contentWindow.document;
    // });
    // using reference to iframe (ifrm) obtained above
    // var win = ifrm.contentWindow; // reference to iframe's window
    // reference to document in iframe
    // reference to form named 'demoForm' in iframe
    // var form = doc.getElementById('demoForm');
    // console.log(doc);
  });
});
