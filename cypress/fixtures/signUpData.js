const { faker } = require("@faker-js/faker")

const signUpData = {
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  password: `${faker.string.alpha(4)}${faker.number.int()}!@`,
  shortPassword: faker.string.alpha(4),
}

module.exports = signUpData
