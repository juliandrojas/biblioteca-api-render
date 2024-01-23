import { config } from 'dotenv';
import express from 'express';
import pg from 'pg';
config()
const app = express();
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})
app.get('/', async (req, res) => {
  const result = await pool.query("SELECT NOW()")
  return res.json(result.rows[0]);
})
app.get('/ping', async (req, res) => {
  const result = await pool.query("SELECT NOW()")
  return res.json(result.rows[0]);
})
app.listen(3000);
console.log('Server on port: ',3000)