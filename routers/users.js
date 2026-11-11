import { Router } from 'express';
import { getUsers, addClient } from '../controller/users.js';

const router = Router();

router.get('/clients', getUsers);
router.post('/clients', addClient);

export default router;
