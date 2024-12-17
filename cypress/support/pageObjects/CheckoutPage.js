import { checkoutPageSelectors } from "../lib/checkoutSelectors"
class CheckoutPage {
  selectProduct() {
    return cy.get(checkoutPageSelectors.product)
  }

  selectSize() {
    return cy.get(checkoutPageSelectors.size)
  }

  selectColor() {
    return cy.get(checkoutPageSelectors.color)
  }

  selectQuantity(desiredQuantity) {
    cy.get(checkoutPageSelectors.quantity).clear().type(desiredQuantity)
  }

  addToCartButton() {
    return cy.get(checkoutPageSelectors.addToCart)
  }

  cartButtonIcon() {
    return cy.get(checkoutPageSelectors.cartButton)
  }

  proceedToCheckoutButton() {
    return cy.get(checkoutPageSelectors.proceedToCheckout)
  }

  checkoutModal() {
    return cy.get(checkoutPageSelectors.modal)
  }

  selectEmail() {
    return cy.get(checkoutPageSelectors.email)
  }

  selectFirstName() {
    return cy.get(checkoutPageSelectors.firstName)
  }

  selectLastName() {
    return cy.get(checkoutPageSelectors.lastName)
  }

  selectStreetAdress() {
    return cy.get(checkoutPageSelectors.streetAdress)
  }

  selectCity() {
    return cy.get(checkoutPageSelectors.city)
  }

  selectCountry() {
    return cy.get(checkoutPageSelectors.country)
  }

  selectPostCode() {
    return cy.get(checkoutPageSelectors.postCode)
  }

  selectState() {
    return cy.get(checkoutPageSelectors.state)
  }

  selectPhone() {
    return cy.get(checkoutPageSelectors.phone)
  }

  nextButton() {
    return cy.get(checkoutPageSelectors.nextButton)
  }

  placeOrderButton() {
    return cy.get(checkoutPageSelectors.placeOrderButton)
  }
}

export default new CheckoutPage()
