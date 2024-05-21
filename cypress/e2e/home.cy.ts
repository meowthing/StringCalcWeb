describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Displays an input and a button that says 'Calculate'", () => {
    cy.get('[data-test="calc-input"]');
    cy.get('[data-test="calc-input-button"]').should("contain", "Calculate");
  });

  it("Displays the correct sum after inputting numbers", () => {
    cy.get('[data-test="calc-input"]').type("2,3,4");
    cy.get('[data-test="calc-input-button"]').click();
    cy.getByDataTestAttr("calc-output").should("contain", "The total is 9!");
  });
});
