import express from 'express';
const app = express();
app.listen(3000);
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