describe("Amazon  Projects", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.in/");
  });
  it("Serch Product", () => {
    cy.get("#searchDropdownBox").select("Electronics", { force: true });
    cy.get("#twotabsearchtextbox").type("Apple Watch");
    cy.get("#nav-search-submit-button").click();
    cy.get("[data-component-type='s-product-image']").as("products");
    cy.get("@products")
      .eq(5)
      .invoke("text")
      .then((productText) => {
        cy.log(productText);
      });
    cy.get("@products").each(($el, index, $list) => {
      cy.wrap($el).scrollIntoView();
      cy.log("index" + index + "and the products is" + $el.text());
    });

    // cy.get("@products").eq(5).click();
  });
});
