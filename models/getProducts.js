const db = require('../db/index');

module.exports = function getDBProducts(count, page) {
  const text = `
  SELECT * FROM products
  ORDER BY id ASC
  LIMIT ${count}
  OFFSET (${page} - 1) * 5
  `;

  return db.query(text);
};
