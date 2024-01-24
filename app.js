import { config } from 'dotenv';
import express from 'express';
import dbPool from './index.js';
import routes from './routes/index.routes.js';
config()
const app = express();
app.use('/api/', routes);
app.listen(3000);
console.log('Server on port: ',3000)
export { dbPool };
