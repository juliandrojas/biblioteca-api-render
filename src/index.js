import express from 'express';
import router from './routes/index.routes.js';
const app = express();
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
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