const { faker } = require("@faker-js/faker")

const checkoutData = {
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  streetAddress: faker.location.streetAddress(),
  city: faker.location.city(),
  country: "Serbia",
  postCode: faker.location.zipCode(),
  state: faker.location.state(),
  phone: faker.phone.number(),
}

module.exports = checkoutData
