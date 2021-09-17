describe("LambdaEats App", () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => cy.visit('localhost:3000'));

    const nameInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('select[name=size]');
    const topping1 = () => cy.get('input[name=topping1]');
    const topping2 = () => cy.get('input[name=topping2]');
    const topping3 = () => cy.get('input[name=topping3]');
    const topping4 = () => cy.get('input[name=topping4]');
    const topping5 = () => cy.get('input[name=topping5]');
    const topping6 = () => cy.get('input[name=topping6]');
    const topping7 = () => cy.get('input[name=topping7]');
    const topping8 = () => cy.get('input[name=topping8]');
    const specialInput = () => cy.get('input[name=special]');
    const orderButton = () => cy.get('button[id=order-pizza]');
    const submitButton = () => cy.get('button[id=order-button]');

    it('All elements are present', () => {
        orderButton().should('exist').click();
        nameInput().should('exist');
        sizeInput().should('exist');
        topping1().should('exist');
        topping2().should('exist');
        topping3().should('exist');
        topping4().should('exist');
        topping5().should('exist');
        topping6().should('exist');
        topping7().should('exist');
        topping8().should('exist');
        specialInput().should('exist');
        submitButton().should('exist')
    })

    describe('Can add text to inputs', () => {
        
        it('Text can be input in the name field', () => {
            orderButton().click();
            nameInput()
                .should('have.value', '')
                .type('Test user')
                .should('have.value', 'Test user');
        })
        
        it('Text can be input in the special field', () => {        
            orderButton().click();
            specialInput()
                .should('have.value', '')
                .type('Test user')
                .should('have.value', 'Test user'); 
        })
    })

    describe('A dropdown selection can and must be made or an error validation will appear', () => {

        it('a dropdown option can be chosen', () => {
            orderButton().click();
            sizeInput().should('have.value', '');
            sizeInput().select('large');
            sizeInput().should('have.value', 'large')
        })

        it('an error validation statement will post to the DOM if a selection is not made', () => {
            orderButton().click();
            sizeInput().select('small');
            sizeInput().select('');
            cy.contains('Please pick a size')
        })
    })
    
    describe('Toppings can be selected and unselected and multiple options can be selected', () => {
        
        it('toppings can be selected', () => {
            orderButton().click();
            topping1().should('not.be.checked');
            topping1().check();
            topping1().should('be.checked')
        })

        it('toppings can be unselected after being selected', () => {
            orderButton().click();
            topping1().should('not.be.checked');
            topping1().check();
            topping1().should('be.checked');
            topping1().uncheck();
            topping1().should('not.be.checked');
        })

        it('multiple toppings can be selected', () => {
            orderButton().click();
            topping1().should('not.be.checked');
            topping2().should('not.be.checked');
            topping7().should('not.be.checked');
            topping8().should('not.be.checked');
            topping1().check();
            topping2().check();
            topping7().check();
            topping8().check();
            topping1().should('be.checked');
            topping2().should('be.checked');
            topping7().should('be.checked');
            topping8().should('be.checked');
        })

        it('multiple toppings can be unselected', () => {
            orderButton().click();
            topping1().should('not.be.checked');
            topping2().should('not.be.checked');
            topping7().should('not.be.checked');
            topping8().should('not.be.checked');
            topping1().check();
            topping2().check();
            topping7().check();
            topping8().check();
            topping1().should('be.checked');
            topping2().should('be.checked');
            topping7().should('be.checked');
            topping8().should('be.checked');
            topping1().uncheck();
            topping2().uncheck();
            topping7().uncheck();
            topping8().uncheck();
            topping1().should('not.be.checked');
            topping2().should('not.be.checked');
            topping7().should('not.be.checked');
            topping8().should('not.be.checked')
        })
    })

    describe('The order can be filled and submitted and have it fields reset after', () => {
        
        it('An order can be submitted', () => {
            orderButton().click();
            submitButton().should('be.disabled');
            nameInput().type('Test Name');
            sizeInput().select('large');
            topping1().check();
            topping4().check();
            topping8().check();
            specialInput().type('All the anchovies please');
            submitButton().should('not.be.disabled');
            submitButton().click();
            nameInput().should('have.value', '');
            sizeInput().should('have.value', '');
            topping1().should('not.be.checked');
            topping4().should('not.be.checked');
            topping8().should('not.be.checked');
            specialInput().should('have.value', '')
        })
    })
})