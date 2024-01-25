import { config } from 'dotenv';
import express from 'express';
import dbPool from './index.js';
import routes from './src/routes/index.routes.js';
config()
const app = express();
app.use('/', routes);
app.listen(3000);
console.log('Server on port: ',3000)
export { dbPool };

