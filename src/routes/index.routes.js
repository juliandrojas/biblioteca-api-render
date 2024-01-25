import { Router } from 'express';
import { getIndex } from '../controllers/index.controllers.js'; // Ajusta la ruta según tu estructura de carpetas

const router = Router();

router.get('/', getIndex);

export default router;
