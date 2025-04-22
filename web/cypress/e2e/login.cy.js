describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })

  it('Não deve logar com senha incorreta', () => {
    cy.iniciar()
    cy.submeterLogin('papito@webdojo.com', 'katanaIncorreta')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.iniciar()
    cy.submeterLogin('404@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})