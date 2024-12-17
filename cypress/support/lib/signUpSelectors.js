import { firstName, lastName, password } from "../../fixtures/signUpData"

export const signUpSelectors = {
  firstName: "#firstname",
  lastName: "#lastname",
  email: "#email_address",
  password: "#password",
  passwordConfirmation: "#password-confirmation",
  createAccButton: "button.action.submit.primary",
  shortPasswordError: "#password-error",
  firstNameError: "#firstname-error",
  lastNameError: "#lastname-error",
  emailError: "#email_address-error",
  passwordError: "#password-error",
  passwordConfirmationError: "#password-confirmation-error",
}
