import { signUpSelectors } from "../lib/signUpSelectors"

class SignUp {
  visitSignUp() {
    cy.visit("/customer/account/create")
  }

  firstName() {
    return cy.get(signUpSelectors.firstName)
  }

  lastName() {
    return cy.get(signUpSelectors.lastName)
  }

  email() {
    return cy.get(signUpSelectors.email)
  }

  password() {
    return cy.get(signUpSelectors.password)
  }

  passwordConfirmation() {
    return cy.get(signUpSelectors.passwordConfirmation)
  }

  creatAccButton() {
    return cy.get(signUpSelectors.createAccButton)
  }

  shortPasswordError() {
    return cy.get(signUpSelectors.shortPasswordError)
  }

  firstNameError() {
    return cy.get(signUpSelectors.firstNameError)
  }

  lastNameError() {
    return cy.get(signUpSelectors.lastNameError)
  }

  emailError() {
    return cy.get(signUpSelectors.emailError)
  }

  passwordError() {
    return cy.get(signUpSelectors.passwordError)
  }

  passwordConfirmationError() {
    return cy.get(signUpSelectors.passwordConfirmationError)
  }
}

export default new SignUp()
