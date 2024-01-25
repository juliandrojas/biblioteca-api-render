import { Router } from 'express';
import { getUserById, getUsers, registerUser, updateUser } from '../controllers/index.controllers.js';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/register', registerUser);
router.patch('/update/:id', updateUser);

export default router;
