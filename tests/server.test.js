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

describe('/products/:product_id', () => {
  test('It should return the product features in the correct format', async () => {
    const response = await request(app).get('/products/12345');
    expect(response.body.features.length).toBe(2);
    expect(response.body.features[0].feature).toEqual('5 Year Warranty');
    expect(response.body.features[0].value).toEqual('null');
    expect(response.body.features[1].feature).toEqual('Frame');
    expect(response.body.features[1].value).toEqual('DuraResin');

  });
});


describe('/products/:product_id/styles', () => {
  test('It should return the product styles in the correct format', async () => {
    const response = await request(app).get('/products/12345/styles');
    let styles = response.body.results;
    expect(response.body.product_id).toBe('12345');
    expect(styles[0].style_id).toBe(24354);
    expect(styles[0].photos.length).toBe(4);
    expect(Object.keys(styles[0].skus).length).toBe(6);

    expect(styles[1].style_id).toBe(24353);
    expect(styles[1].photos.length).toBe(3);
    expect(Object.keys(styles[1].skus).length).toBe(6);

    expect(styles[2].style_id).toBe(24352);
    expect(styles[2].photos.length).toBe(3);
    expect(Object.keys(styles[2].skus).length).toBe(6);
  });
});

describe('/products/:product_id/related', () => {
  test('It should return an array of the related product IDs', async () => {
    const response = await request(app).get('/products/12345/related');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(4);
  });
});