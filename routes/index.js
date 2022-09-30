const db = require('../db/index');

const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
const values = ['abdiel', 'abdiel@gmail.com'];

db.query(text, values)
  .then((res) => console.log(res.rows[0]))
  .catch((e) => console.error(e.stack));
