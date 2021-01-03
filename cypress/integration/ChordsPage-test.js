/// <reference types="cypress" />

describe('ChordPage Test', () => {
    it('Test E to E for ChordPage', () => {
        cy.visit('/')
        cy.contains('Chords').click()
        cy.wait(300)
        cy.contains('Major Chord')

        cy.get('[data-testid=note-selector]').contains('Eb').click()
        // Wait for loading
        cy.wait(300)

        // Click 1 on the chord note
        cy.contains('1').siblings('button').click()
        cy.get("[data-testid=selected]").should('have.text', 'Eb')

        // Click 3 on the chord note
        cy.contains('3').siblings('button').click()
        cy.get("[data-testid=selected]").should('have.text', 'G')

        // Click dim7 chord
        cy.contains(/Ebdim7/i).click()
        cy.wait(300)
        cy.contains('bb7').siblings('button').click()
        cy.get("[data-testid=selected]").should('have.text', 'C')

        // Click on the chord again to hide sidebar
        cy.contains(/Ebdim7/i).click()
        cy.get("[data-testid='sidebar']").then($div => {
            assert(($div.is(':visible')) != true, "Sidebar not visible")
        })

        cy.contains(/Ebmin7/i).click()
        cy.get("[data-testid='sidebar']").then($div => {
            assert(($div.is(':visible')) == true, "Sidebar is visible")
        })
        
    })
})
