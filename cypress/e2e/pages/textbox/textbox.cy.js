import textbox from "./textbox.sel";

class TextBox {
    visitTextBox() {
        Cypress.on('uncaught:exception', () => false)
        cy.visit('/text-box');
    }
    inputTextBox(username, email, currentAddress, permanentAddress) {
        Cypress.on('uncaught:exception', () => false)
        cy.get(textbox.inputUsername).type(username);
        cy.get(textbox.inputEmail).type(email);
        cy.get(textbox.inputCurrentAddress).click().type(currentAddress);
        cy.get(textbox.inputPermanentAddress).click().type(permanentAddress);
        cy.get(textbox.buttonSubmit).click();
    }
    verifyTextboxResultCard(expectedText){
        cy.get('.border').contains(expectedText).should('be.visible');
    }
}
const textBoxPage = new TextBox();
export default textBoxPage;