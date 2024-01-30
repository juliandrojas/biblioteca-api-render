import express from 'express';
import morgan from 'morgan';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
const app = express();
app.listen(PORT);
console.log("Server on port:",PORT);
//Middlewares
app.use(express.json());
app.use(morgan('dev'));
//Use the routes
app.use(indexRoutes);
//Not found route
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found"
  })
})
/*import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import router from './routes/index.routes.js';
config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use(router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
*/