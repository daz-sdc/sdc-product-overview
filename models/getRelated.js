const db = require('../db/index');

module.exports = (id) => {
  const text = 'SELECT related_product_id FROM related_products WHERE product_id = $1';
  const params = [id];

  return db.query(text, params);
};
