class Webtables {
    visitWebtables() {
        Cypress.on('uncaught:exception', () => false)
        cy.visit('/webtables');
    }
    addRegister(firstName, lastName, email, age, salary, department) {
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#userEmail').type(email);
        cy.get('#age').type(age);
        cy.get('#salary').type(salary);
        cy.get('#department').type(department);
        cy.get('#submit').click();
    }
}
const webtablesPage = new Webtables();
export default webtablesPage;