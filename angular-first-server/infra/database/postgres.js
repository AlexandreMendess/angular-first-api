const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'admin',
  password: 'rootpassword',
  database: 'products_db',
  max: 20,
  idleTimeoutMillis: 30000,
});

async function query(text, params) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  
  console.log('executed query', { text, duration, rows: res.rowCount });
  return res;
}

module.exports = {
  query,
  pool
};