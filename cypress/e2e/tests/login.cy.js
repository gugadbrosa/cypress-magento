import LoginPage from "../../support/pageObjects/LoginPage"

describe("Login", function () {
  beforeEach(function () {
    cy.fixture("loginData").as("userData")
    LoginPage.visitLogin()
  })

  it("valid login credentials", function () {
    const { email, password } = this.userData.validUser

    LoginPage.login(email, password)
    cy.url().should("include", "/customer/account/")
  })

  it("invalid login credentials", function () {
    const { email, password, errorMessage } = this.userData.invalidUser

    LoginPage.login(email, password)
    LoginPage.errorMessageField().should("contain", errorMessage)
  })

  it("valid email and invalid password", function () {
    const { email } = this.userData.validUser
    const { password, errorMessage } = this.userData.invalidUser

    LoginPage.login(email, password)
    LoginPage.errorMessageField().should("contain", errorMessage)
  })

  it("empty login values", function () {
    LoginPage.clickSignIn()
    cy.wait(1000)
    LoginPage.emailRequiredMessageField().should("be.visible")
    LoginPage.passwordRequiredField().should("be.visible")
  })
})
