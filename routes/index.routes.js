import { Router } from 'express';
import { getIndex, getPing } from '../controllers/index.controllers.js'; // Ajusta la ruta según tu estructura de carpetas

const router = Router();

router.get('/', getIndex);
router.get('/ping', getPing);

export default router;
