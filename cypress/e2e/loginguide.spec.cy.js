describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')  
  });

  const selectorsList = {
    usernameField : '#username',
    passwordField : '#password',
    loginButton : '.woocommerce-form > .button',
    selectionTitleMyAccount: '.woocommerce-MyAccount-content > :nth-child(2)', 
    wrongCredentialAlert:'.woocommerce-error'
  }
  
    it('Login - Sucess', () => {
      cy.get(selectorsList.usernameField).type('testeqasenior@gmail.com') 
      cy.get(selectorsList.passwordField).type('qasenior78')
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/my-account/')
      cy.get(selectorsList.selectionTitleMyAccount).contains('Olá, testeqasenior (não é testeqasenior? Sair)')
    })
  
    it('Login - Fail', () => {
      cy.get(selectorsList.usernameField).type('teste2qasenior@gmail.com') 
      cy.get(selectorsList.passwordField).type('qasenior789')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert).contains('Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
  })