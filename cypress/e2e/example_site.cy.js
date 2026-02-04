
describe("Example Cypress Site - Fluxos básicos", () => {
  it("Preencher formulário e validar UI", () => {
    cy.visit("/");
    cy.contains("Actions").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email").type("marco.qa@example.com");
    cy.get(".action-textarea").type("Teste Cypress");
    cy.get(".action-checkboxes [type='checkbox']").first().check();
    cy.get(".action-select").select("apples");
  });
});
