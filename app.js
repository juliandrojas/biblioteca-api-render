import { config } from 'dotenv';
import express from 'express';
import pg from 'pg';
import routes from './routes/index.routes.js';
config()
const app = express();
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})
app.use('/api/', routes);
app.listen(3000);
console.log('Server on port: ',3000)