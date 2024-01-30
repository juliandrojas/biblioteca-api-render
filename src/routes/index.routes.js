import { Router } from 'express';
import { create, read, update } from '../controllers/index.controllers.js';

const router = Router();

router.get('/', read);
router.post('/', create)
router.put('/', update);
/*router.get('/users/:id', getUserById);
router.post('/register', registerUser);
router.patch('/update/:id', updateUser);*/

export default router;
