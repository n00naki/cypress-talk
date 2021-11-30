describe("Gazin Test", () => {
  it("login", () => {
    cy.visit("https://stage.gazinatacado.com.br/");
    cy.get("[data-testid=close-button-modal]").click();
    cy.get(".css-8wnbdx > .chakra-button").click();
    cy.get(".css-1vr2anf > .chakra-button").click();
    cy.get(".css-32emub").click();
  });
});
