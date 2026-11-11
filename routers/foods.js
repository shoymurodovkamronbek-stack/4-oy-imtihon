import { Router } from 'express';
import { getFoods } from '../controller/foods.js';

const router = Router();

router.get('/foods', getFoods);
export default router;