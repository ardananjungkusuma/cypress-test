/// <reference types="cypress" />

describe("Form Testing", () => {
  it("Visit Page, Changing theme to Darkmode and Testing Inline Form", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("Light").click();
    cy.contains("Dark").click();
    cy.contains("nb-card", "Inline form")
      .find('[placeholder="Jane Doe"]')
      .click()
      .type("Ardan Anjung")
      .should("have.value", "Ardan Anjung");
    cy.contains("nb-card", "Inline form")
      .find('[placeholder="Email"]')
      .click()
      .type("ardananjung@gmail.com")
      .should("have.value", "ardananjung@gmail.com");
    cy.contains("nb-card", "Inline form").find(".custom-checkbox").click();
  });

  it("Testing Using the Grid", () => {
    cy.get("#inputEmail1")
      .type("ardan@gmail.com")
      .should("have.value", "ardan@gmail.com");
    cy.get("#inputPassword2").type("ardan123").should("have.value", "ardan123");
    cy.contains("Option 1").click();
  });

  it("Testing Basic Form", () => {
    cy.get("#exampleInputEmail1")
      .type("ardananjung@gmail.com")
      .should("have.value", "ardananjung@gmail.com");
    cy.get("#exampleInputPassword1")
      .type("ardan123")
      .should("have.value", "ardan123");
    cy.contains("Check me out").click();
  });

  it("Testing Form Without Labels", () => {
    cy.get('[placeholder="Recipients"]')
      .type("Ardan Anjung Kusuma")
      .should("have.value", "Ardan Anjung Kusuma");
    cy.get('[placeholder="Subject"]')
      .type("Halo Dunia")
      .should("have.value", "Halo Dunia");
    cy.get('textarea[placeholder="Message"]')
      .type("Halo dunia, ini ardan")
      .should("have.value", "Halo dunia, ini ardan");
  });

  it("Testing Block form", () => {
    cy.get("#inputFirstName")
      .type("Ardan Anjung")
      .should("have.value", "Ardan Anjung");
    cy.get("#inputLastName").type("Kusuma").should("have.value", "Kusuma");
    cy.get("#inputEmail")
      .type("ardananjung@gmail.com")
      .should("have.value", "ardananjung@gmail.com");
    cy.get("#inputWebsite")
      .type("ardananjungkusuma.github.io")
      .should("have.value", "ardananjungkusuma.github.io");
  });
});
