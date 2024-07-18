// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (username, password) => {
     cy.visit('https://www.saucedemo.com/v1/');
     cy.get('#user-name').type(username);
     cy.get('#password').type(password);
     cy.get('#login-button').click();
});


Cypress.Commands.add('addItem', (produto) => {;

   cy.contains('.inventory_list', produto) 
   .parent() // vai para o elemento pai
   .within(() => {
    // encontra e clica no botão "AND TO CART"
      cy.get('.btn_primary, .btn_inventory').click();
   });

  });
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })