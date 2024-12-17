class CheckoutPage {
  productSelector = ".product-item-photo"
  sizeSelector = "#option-label-size-143-item-168"
  colorSelector = "#option-label-color-93-item-57"
  quantitySelector = "#qty"
  addToCartSelector = "#product-addtocart-button"
  cartButtonSelector = "a.action.showcart"
  proceedToCheckoutSelector = "#top-cart-btn-checkout"
  modalSelector = "#ui-id-1"
  emailSelector = "#customer-email"
  firstNameSelector = "[name='firstname']"
  lastNameSelector = "[name='lastname']"
  streetAdressSelector = "[name='street[0]']"
  citySelector = '[name="city"]'
  countrySelector = '[name="country_id"]'
  postCodeSelector = '[name="postcode"]'
  StateSelector = '[name="shippingAddress.region_id"] > div > select'
  phoneSelector = '[name="telephone"]'
  nextButtonSelector = "button[data-role='opc-continue']"

  selectProduct() {
    return cy.get(this.productSelector)
  }

  selectSize() {
    return cy.get(this.sizeSelector)
  }

  selectColor() {
    return cy.get(this.colorSelector)
  }

  selectQuantity(desiredQuantity) {
    cy.get(this.quantitySelector).clear().type(desiredQuantity)
  }

  addToCartButton() {
    return cy.get(this.addToCartSelector)
  }

  cartButtonIcon() {
    return cy.get(this.cartButtonSelector)
  }

  proceedToCheckoutButton() {
    return cy.get(this.proceedToCheckoutSelector)
  }

  checkoutModal() {
    return cy.get(this.modalSelector)
  }

  selectEmail() {
    return cy.get(this.emailSelector)
  }

  selectFirstName() {
    return cy.get(this.firstNameSelector)
  }

  selectLastName() {
    return cy.get(this.lastNameSelector)
  }

  selectStreetAdress() {
    return cy.get(this.streetAdressSelector)
  }

  selectCity() {
    return cy.get(this.citySelector)
  }

  selectCountry() {
    return cy.get(this.countrySelector)
  }

  selectPostCode() {
    return cy.get(this.postCodeSelector)
  }

  selectState() {
    return cy.get(this.StateSelector)
  }

  selectPhone() {
    return cy.get(this.phoneSelector)
  }

  nextButton() {
    return cy.get(this.nextButtonSelector)
  }

  placeOrderButton() {
    return cy.get("button.action.primary.checkout")
  }
}

export default new CheckoutPage()
