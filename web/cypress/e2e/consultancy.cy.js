describe('Formulário de Consultoria', () => {

    it('Deve preencher o formulário de consultoria', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
    })
})