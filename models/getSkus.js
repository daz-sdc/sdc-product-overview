const db = require('../db/index');

module.exports = (id) => {
  const text = 'SELECT * FROM styles_skus WHERE style_id = $1';
  const params = [id];

  return db.query(text, params);
};
