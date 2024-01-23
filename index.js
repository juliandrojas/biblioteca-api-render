import { config } from 'dotenv';
import pg from 'pg';
config()
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})