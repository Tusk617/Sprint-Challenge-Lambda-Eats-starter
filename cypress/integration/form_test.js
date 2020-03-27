describe("Testing our inputs and submitting the form for server response", function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
    })
    it("Adding tests to input", function() {
        cy.get("input[name='name']")
            .type("Joe Mama")
            .should("have.value", "Joe Mama");
        cy.get("select[name='pizzaSize']")
            .select('Medium')
            .should("have.value", "Medium");
        cy.get("input[name='pepperoni']").check()
            .should("be.checked")
            cy.get("input[name='sausage']").check()
            .should("be.checked")
        cy.get('#submitButton').click()
    })
    
})