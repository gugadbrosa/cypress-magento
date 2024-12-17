import SignUpPage from "../../support/pageObjects/SignUpPage"
import signUpData from "../../fixtures/signUpData"

describe("SignUp", () => {
  beforeEach(() => {
    SignUpPage.visitSignUp()
  })

  it("user is able to register", () => {
    SignUpPage.firstName().type(signUpData.firstName)
    SignUpPage.lastName().type(signUpData.lastName)
    SignUpPage.email().type(signUpData.email)
    SignUpPage.password().type(signUpData.password)
    SignUpPage.passwordConfirmation().type(signUpData.password)
    SignUpPage.creatAccButton().click()

    cy.url().should("contain", "/customer/account")
  })

  it("user inputs short password", () => {
    SignUpPage.firstName().type(signUpData.firstName)
    SignUpPage.lastName().type(signUpData.lastName)
    SignUpPage.email().type(signUpData.email)
    SignUpPage.password().type(signUpData.shortPassword)
    SignUpPage.passwordConfirmation().type(signUpData.shortPassword)
    SignUpPage.creatAccButton().click()
    SignUpPage.shortPasswordError().should("be.visible")
  })

  it("user leaves all fields blank", () => {
    SignUpPage.creatAccButton().click()

    SignUpPage.firstNameError().should("be.visible")
    SignUpPage.lastNameError().should("be.visible")
    SignUpPage.emailError().should("be.visible")
    SignUpPage.passwordError().should("be.visible")
    SignUpPage.passwordConfirmationError().should("be.visible")
  })
})
