describe('My First Test', function(){
    it('finds an element', function(){
        cy.visit('https://shubhramishrakota2310.github.io/myapp/')

        cy.contains('his').click()
    })
})