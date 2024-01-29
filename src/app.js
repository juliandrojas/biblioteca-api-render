import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes.js';
const app = express();
//Settings 
app.set('port', process.env.PORT);
app.use(morgan('dev'));
//Routes
app.use(indexRoutes);
app.listen(3000, () => {
  console.log("Server on port 3000");
  console.log(process.env.DB_HOST);
})
/*import dotenv from 'dotenv';
import express from 'express';
import dbPool from './index.js'; // Asumo que esto es tu pool de conexiones a la base de datos
import routes from './src/routes/index.routes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export { dbPool };*/
