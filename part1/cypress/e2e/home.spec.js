describe('home spec', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
  })

  context('Seccion inicial', () => {

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

  context('Seccion de cursos' , () => {

    it('curso: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-your-first-application')
    })

    it('curso: Testing Foundations',() => {
      cy.getByData('course-1').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-foundations')
    })

    it('curso: Cypress Fundamentals ',() => {
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/cypress-fundamentals')
    })
  })
})