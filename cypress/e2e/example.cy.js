
describe("Projeto Cypress - Site de Exemplo", () => {

  it("Deve acessar a página inicial", () => {
    cy.visit("/");
    cy.contains("Kitchen Sink").should("be.visible");
  });

  it("Deve navegar até Actions e preencher formulário", () => {
    cy.visit("/");
    cy.contains("Actions").click();

    cy.get(".action-email")
      .should("be.visible")
      .type("qa.teste@example.com");

    cy.get(".action-textarea")
      .type("Automação com Cypress para portfólio");

    cy.get(".action-checkboxes input")
      .first()
      .check()
      .should("be.checked");

    cy.get(".action-select")
      .select("apples")
      .should("have.value", "fr-apples");
  });

});
