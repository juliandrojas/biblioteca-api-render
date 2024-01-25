import { config } from 'dotenv';
import express from 'express';
import pg from 'pg';
import cors from 'cors';
import router from './routes/index.routes.js';
const app = express();
config()
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
export default pool;
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//Routes
app.use(router);
app.listen(3000);
console.log('Server on port 3000');
// import { config } from 'dotenv';
// import pg from 'pg';
// config()
// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });
// export default pool;