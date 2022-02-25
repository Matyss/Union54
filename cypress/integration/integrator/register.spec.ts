describe('Create fixture file', () => {
    beforeEach(() =>{
        cy.generateIntegratorData();
        cy.visit('/')
    })
    it('Test', () => {
        console.log('Test Done'); 
    })
})
