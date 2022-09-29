const request = require('supertest');
const app = require('../app');

describe('Initial test', () => {
  test('It should return a 200 code for root path', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});