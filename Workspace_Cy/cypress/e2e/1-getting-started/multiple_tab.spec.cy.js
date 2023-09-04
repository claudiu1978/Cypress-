/// <reference types="cypress"/>

describe(" Multipe Windos handle", () => {
  beforeEach(() => {
    cy.visit("https://test.qatechhub.com/window-handling/");
  });
  it("TC1 - Verify href and target attributes", () => {
    cy.contains("a", "Click Here").as("button");
    cy.get("@button")
      .should("have.attr", "href")
      .and("equal", "https://qatechhub.com");
    cy.get("@button").should("have.attr", "target").and("equal", "_blank");
  });
  it("Navigate to target page by removing attr", () => {
    cy.contains("a", "Click Here").as("button");
    cy.get("@button").invoke("removeAttr", "target").click();
  });
});
