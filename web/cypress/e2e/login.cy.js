describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email')
      .should('be.visible')
      .type('papito@webdojo.com')
    cy.get('#password')
      .should('be.visible')
      .type('katana123')

    cy.contains('button', 'Entrar')
      .should('be.visible')
      .click()

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
  })

  it('Não deve logar com senha incorreta', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email')
      .should('be.visible')
      .type('papito@webdojo.com')
    cy.get('#password')
      .should('be.visible')
      .type('katana321')

    cy.contains('button', 'Entrar')
      .should('be.visible')
      .click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email')
      .should('be.visible')
      .type('teste@webdojo.com')
    cy.get('#password')
      .should('be.visible')
      .type('katana123')

    cy.contains('button', 'Entrar')
      .should('be.visible')
      .click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })
})