import CheckoutPage from "../../support/pageObjects/CheckoutPage"
import checkoutData from "../../fixtures/checkoutData"

describe("Checkout", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Add item and order it", () => {
    CheckoutPage.selectProduct().first().click()
    CheckoutPage.selectSize().click()
    CheckoutPage.selectColor().click()
    CheckoutPage.selectQuantity("1")
    CheckoutPage.addToCartButton().click()
    cy.wait(2000)

    CheckoutPage.cartButtonIcon().click()
    CheckoutPage.checkoutModal()
      .should("be.visible")
      .within(() => {
        CheckoutPage.proceedToCheckoutButton().should("be.visible").click()
      })

    CheckoutPage.selectEmail().type(checkoutData.email)
    CheckoutPage.selectFirstName().type(checkoutData.firstName)
    CheckoutPage.selectLastName().type(checkoutData.lastName)
    CheckoutPage.selectStreetAdress().type(checkoutData.streetAddress)
    CheckoutPage.selectCity().type(checkoutData.city)
    CheckoutPage.selectCountry().select(checkoutData.country)
    CheckoutPage.selectPhone().type(checkoutData.phone)
    CheckoutPage.selectPostCode().type(checkoutData.postCode)
    cy.wait(2000)
    CheckoutPage.nextButton().click()
    CheckoutPage.placeOrderButton().should("be.visible").click()

    cy.url().should("include", "checkout/onepage/success/")
  })
})
