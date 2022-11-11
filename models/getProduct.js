const db = require('../db/index');

module.exports = function getDBProductFeatures(id) {
  const text = 'SELECT * FROM product_information WHERE id = $1';
  const params = [id];
  return db.query(text, params);
};
