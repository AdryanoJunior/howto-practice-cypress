describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')  
  });
  
    it('Login - Sucess', () => {
      cy.get('#username').type('testeqasenior@gmail.com') 
      cy.get('#password').type('qasenior78')
      cy.get('.woocommerce-form > .button').click()
      cy.location('pathname').should('equal', '/my-account/')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').contains('Olá, testeqasenior (não é testeqasenior? Sair)')
    })
  
    it('Login - Fail', () => {
      cy.get('#username').type('teste2qasenior@gmail.com') 
      cy.get('#password').type('qasenior789')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-error').contains('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
  })