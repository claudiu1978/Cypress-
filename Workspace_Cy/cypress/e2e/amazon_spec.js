/// <reference types="cypress"/>

describe("Amazon Projects", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.in");
  });
  it("Serch Product", () => {
    cy.get("#searchDropdownBox").select("Electronics");
    cy.get("#twotabsearchtextbox").type("Apple Watch");
    cy.get("#nav-search-submit-button").click();
  });
});
