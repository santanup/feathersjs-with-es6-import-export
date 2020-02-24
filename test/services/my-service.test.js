const app = require('../../src/app');

describe('\'my-service\' service', () => {
  it('registered the service', () => {
    const service = app.service('my-service');
    expect(service).toBeTruthy();
  });
});
