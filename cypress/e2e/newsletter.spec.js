describe('Funcionalidad de newsletter', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(500)
    })

    it('permite al usuario a suscribirse a la newsletter correctamente', () => {
        cy.getByData('email-input').type('fran@correo.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist').contains('fran@correo.com')
    })

    it('No permite al usuario utilizar un mail invalido', () => {
        cy.getByData('email-input').type('fran')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')

    })

    it.only('usuarios no puedan anotarse a nuestro newsletter si ya están suscriptos', () => {
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should('exist').contains('already exists. Please use a different email address.')
    })
})