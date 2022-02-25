const { faker } = require('@faker-js/faker');

export function generateRandomEmail() {
  return `${faker.internet.email()}`;
}
