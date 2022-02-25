import { ENDPOINTS } from '../../support/urls';

describe('Integrator API', () => {
  beforeEach(() => {
    cy.generateIntegratorData();
  });

  it('should be able to register with the system using correct data', () => {
    cy.fixture('integratorCorrectRegisterData.json').then((data) => {
      cy.request('POST', ENDPOINTS.INTEGRATOR.REGISTER, data).then(
        (response) => {
          expect(response.status).to.eq(201);
          expect(response.body.data).to.have.all.keys('u54IntegratorId');
        }
      );
    });
  });

  it('should reject registration with already used email', () => {
    cy.fixture('integratorFalseRegisterData.json').then((data) => {
      cy.request({
        method: 'POST',
        url: ENDPOINTS.INTEGRATOR.REGISTER,
        body: data,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property(
          'message',
          'email already exists'
        );
      });
    });
  });
});
