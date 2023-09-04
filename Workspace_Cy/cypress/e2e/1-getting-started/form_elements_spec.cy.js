/// <reference types="cypress"/>

describe(" Form elements test", () => {
  beforeEach(() => {
    cy.visit("https://test.qatechhub.com/form-elements/");
    cy.fixture("form_elements").then(function (data) {
      globalThis.data = data;
    });
  });
  it("Form Element Test", () => {
    cy.get("#wpforms-49-field_1").type(data.firstName);
    cy.get(".wpforms-field-name-last.wpforms-field-required").type(
      data.lastName
    );
    cy.get("input[type='email']").type(data.email);
    cy.get("#wpforms-49-field_4").type(data.phoneNumber);
    cy.get('input[value="Female"]').check();
    cy.get("#wpforms-49-field_5").select("Cypress");
    cy.contains("button", "Submit").click();
  });
});
