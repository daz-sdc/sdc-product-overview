const db = require('../db/index');

module.exports = (id) => {
  const text = 'SELECT * FROM products WHERE id = $1';
  const params = [id];

  return db.query(text, params);
};
