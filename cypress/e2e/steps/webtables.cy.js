import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import webtablesPage from "../pages/webtables/webtables.cy"
import user from "../../fixtures/user.json"

Given('Navigate to demo qa webtables', () => {
    webtablesPage.visitWebtables();
})

When('Add new webtables register', () => {
    webtablesPage.addRegister(
        user.firstName,
        user.lastName,
        user.email,
        user.age,
        user.salary,
        user.departement)
})