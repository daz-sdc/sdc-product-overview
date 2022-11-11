const db = require('../db/index');

module.exports = function getDBSkus(id) {
  const text = 'SELECT sku_id, quantity, size FROM styles_skus WHERE style_id = $1';
  const params = [id];

  return db.query(text, params);
};
