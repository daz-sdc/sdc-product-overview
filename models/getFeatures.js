const db = require('../db/index');

module.exports = (id) => {
  const text = 'SELECT feature, value FROM product_features WHERE product_id = $1';
  const params = [id];

  return db.query(text, params);
};
