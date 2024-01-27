import { Router } from 'express';
import { createUser } from '../controllers/index.controllers.js';

const router = Router();

router.get('/createUser', createUser);
/*router.get('/users/:id', getUserById);
router.post('/register', registerUser);
router.patch('/update/:id', updateUser);*/

export default router;
