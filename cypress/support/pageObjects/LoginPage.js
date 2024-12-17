import { loginSelectors } from "../lib/loginSelectors"
class LoginPage {
  visitLogin() {
    cy.visit("/customer/account/login")
  }

  fillEmail(email) {
    cy.get(loginSelectors.email).type(email)
  }

  fillPassword(password) {
    cy.get(loginSelectors.password).type(password)
  }

  clickSignIn() {
    cy.get(loginSelectors.signInButton).click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.clickSignIn()
  }

  emailRequiredMessageField() {
    return cy.get(loginSelectors.emailRequiredMessage)
  }

  passwordRequiredField() {
    return cy.get(loginSelectors.passwordRequiredMessage)
  }

  errorMessageField() {
    return cy.get(loginSelectors.errorMessage)
  }
}

export default new LoginPage()
