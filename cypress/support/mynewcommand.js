Cypress.Commands.add('login', () => {
   
  
    // Click on the 'Signup / Login' link
    cy.get('a[href="/login"]').click();
  
    // Enter the email address and password
    cy.get('[data-qa="login-email"]')
      .type('anushka111@gmail.com')
      .should('have.value', 'anushka111@gmail.com'); // Ensure the email was typed correctly
  
    cy.get('input[name="password"]')
      .type('112233')
      .should('have.value', '112233'); // Ensure the password was typed correctly
  
    // Click the login button to submit
    cy.get('button[data-qa="login-button"]').click();
  })


