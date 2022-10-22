import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import textBoxPage from "../pages/textbox/textbox.cy";

Given('Navigate to demo.qa textbox', () => {
  textBoxPage.visitTextBox()  
})

When('input demo qa textbox', (datatable) => {
  datatable.hashes().forEach(element => {
    textBoxPage.inputTextBox(element.username, element.email, element.currentAddress, element.permanentAddress)
  });
})

Then('show result message contains {string}', (message) => {
  textBoxPage.verifyTextboxResultCard(message);
})

