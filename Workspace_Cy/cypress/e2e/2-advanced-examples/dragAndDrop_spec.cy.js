/// <reference types="cypress"/>

describe("I frame Drag and Drop Operation", () => {
  beforeEach(() => {
    cy.visit("https://jqueryui.com/droppable/");
  });

  it("Drag and Drop with Iframe", () => {
    cy.get(".demo-frame").then(($frame) => {
      const body = $frame.contents().find("body");

      cy.wrap(body).find("#draggable").as("source");
      cy.wrap(body).find("#droppable").as("target");
    });
    cy.get("@source").trigger("mousedown", { wich: 1 });
    cy.get("@target")
      .trigger("mousemove", { wich: 1 })
      .trigger("mouseup", { force: true });
    cy.get("@target").should("contains.text", "\n\tDrop here\n");
  });
});
