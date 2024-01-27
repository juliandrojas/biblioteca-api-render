import dotenv from 'dotenv';
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

export { dbPool };
