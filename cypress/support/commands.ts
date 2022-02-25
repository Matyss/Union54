Cypress.Commands.add('generateIntegratorData', () => {

  // Could use Faker to create correct and false seed data. Could be aligned strictly with API documentation.
  cy.writeFile('cypress/fixtures/integratorCorrectRegisterData.json', {
    "floatCurrencies": ["GBP"],
    "firstName": "Rob",
    "lastName": "Banks",
    "country": "GBR",
    "businessName": "Union54",
    "registrationNumber": 12345678,
    "businessAddress": "1 Street, London",
    "webhookUrl": 'https://integrator.com/union54/webhook',
    "email": "example@gmail.com",
    "password": "P@ssw0rd1234",
    "contactNumber": "48-500-100-100"
  });
});