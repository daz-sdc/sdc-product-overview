const db = require('../db/index');

module.exports = (id) => {
  const text = 'SELECT thumbnail_url, url FROM styles_photos WHERE style_id = $1';
  const params = [id];

  return db.query(text, params);
};
