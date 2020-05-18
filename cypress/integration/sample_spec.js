/// <reference types="Cypress" />

describe('My First Test', () => {
  it('test url works', () => {
    cy.visit('http://localhost:8080');
  });

  it('test signup exists', () => {
    cy.contains('a.nav-link', 'Sign up').click;
  });
});
