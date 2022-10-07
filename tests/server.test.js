const request = require('supertest');
const app = require('../app');

describe('/', () => {
  test('It should return a 200 code for root path', (done) => {
    request(app)
      .get('/')
      .expect(200, done)
  });
});

describe('/products', () => {

  test('It should return 5 products when no count is specified', async () => {
    const response = await request(app)
      .get('/products');
    expect(response.body.length).toBe(5);
  });

  test('It should return the specified amount when a count query param is specified', async () => {
    const response = await request(app)
      .get('/products?count=13');
    expect(response.body.length).toBe(13);
  });

  test('It should paginate results when the page query param is specified', async () => {
    const page1 = await request(app)
      .get('/products?page=1')
    const page2 = await request(app)
      .get('/products?page=2')
    let counter = 1;
    page1.body.forEach((prod) => {
      expect(prod.id).toBe(counter++);
    });
    page2.body.forEach((prod) => {
      expect(prod.id).toBe(counter++);
    });
  });

});