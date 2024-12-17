class LoginPage {
  emailField = "#email"
  passwordField = "#pass"
  signInButton = "#send2"
  emailRequiredMessage = "#email-error"
  passwordRequiredMessage = "#pass-error"
  errorMessage = "[data-ui-id='message-error']"

  visitLogin() {
    cy.visit("/customer/account/login")
  }

  fillEmail(email) {
    cy.get(this.emailField).type(email)
  }

  fillPassword(password) {
    cy.get(this.passwordField).type(password)
  }

  clickSignIn() {
    cy.get(this.signInButton).click()
  }

  login(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.clickSignIn()
  }

  emailRequiredMessageField() {
    return cy.get(this.emailRequiredMessage)
  }

  passwordRequiredField() {
    return cy.get(this.passwordRequiredMessage)
  }

  errorMessageField() {
    return cy.get(this.errorMessage)
  }
}

export default new LoginPage()
