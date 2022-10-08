const db = require('../db/index');

module.exports = (id) => {
  const text = 'SELECT style_id, name, original_price, sale_price, "default?" FROM product_styles WHERE product_id = $1';
  const params = [id];

  return db.query(text, params);
};
