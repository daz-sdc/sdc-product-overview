require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({ connectionString });

module.exports = {
  async query(text, params) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { duration, rows: res.rowCount });
    return res;
  },
};
