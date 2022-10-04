const db = require('../db/index');

module.exports = (page, count) => {
  const text = `
  SELECT * FROM products
  ORDER BY product_id
  LIMIT ${count}
  OFFSET (${page} - 1) * 5
  `;

  return db.query(text);
};
