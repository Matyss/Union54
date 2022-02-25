import { generateRandomEmail } from './utils';

Cypress.Commands.add('generateIntegratorData', () => {
  const randomCorrectEmail = generateRandomEmail();
  const baseUserData = {
    floatCurrencies: ['USD'],
    firstName: 'Rob',
    lastName: 'Banks',
    country: 'GBR',
    businessName: 'Union54',
    registrationNumber: '12345678',
    businessAddress: '1 Street, London',
    webhookUrl: 'https://integrator.com/union54/webhook',
    password: 'P@ssw0rd1234',
    contactNumber: '+4850010010'
  };

  // Could use Faker to create correct and false seed data. Could be aligned strictly with API documentation.
  cy.writeFile('cypress/fixtures/integratorCorrectRegisterData.json', {
    ...baseUserData,
    email: randomCorrectEmail
  });

  cy.writeFile('cypress/fixtures/integratorFalseRegisterData.json', {
    ...baseUserData,
    email: 'test@test.com'
  });
});
