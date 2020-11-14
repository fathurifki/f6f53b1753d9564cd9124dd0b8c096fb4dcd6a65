///  <reference types="cypress" />

describe('First Test', () => {
    it('Kulina App Visit', () => {
        cy.visit('https://f6f53b1753d9564cd9124dd0b8c096fb4dcd6a65.fathurifki.vercel.app/')
    })
})

describe('Testing', () => {
    it('Modal', () => {
        cy.contains('Pilih Destinasi').click({ force: true })
        cy.contains('Cek makanan yang tersedia di lokasi kamu!')
        cy.get('input').click({ force: true }).type('kulina')
        cy.contains('Kulina').click({ force: true })
    })

    
    it('DefaultPage', () => {
        cy.contains('16').click()
        cy.contains('17').click()
    })
    
    it('Button', () => {
        cy.contains('Lunch').click()
    })

    it('Add To Cart', () => {
        cy.contains('ADD').click()
        cy.contains('ADD').click()
        cy.contains('ADD').click()
    })
    

    it('Cart', () => {
        cy.contains('3 Items').click()
    })

}) 