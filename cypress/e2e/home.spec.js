describe('home spec', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
  })
  it('passes', () => {
    cy.getByData('hero-heading').contains("Testing Next.js Applications with Cypress")
  })

  it('verificamos las caracteristicas de los cursos ', () => {
    // cy.get('dt').eq(0).contains(/4 courses/i) expresiones regulares
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')
    
  })
})