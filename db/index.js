require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.CONNECTION_STRING;

const pool = new Pool({ connectionString });

module.exports = {
  async query(text, params) {
    return pool.query(text, params);
  },
};
