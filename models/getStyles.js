const db = require('../db/index');

module.exports = function getDBStyles(id) {
  const text = 'SELECT style_id, name, original_price, sale_price, "default?", photos, skus FROM material_styles WHERE product_id = $1';
  const params = [id];

  return db.query(text, params);
};
