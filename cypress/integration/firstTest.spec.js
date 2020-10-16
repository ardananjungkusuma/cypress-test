/// <reference types="cypress" />

describe("Using the Grid", () => {
  it("Testing Using the Grid", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.get("#inputEmail1")
      .type("ardan@gmail.com")
      .should("have.value", "ardan@gmail.com");
    cy.get("#inputPassword2").type("ardan123").should("have.value", "ardan123");
    cy.contains("Option 1").click();
  });
});
