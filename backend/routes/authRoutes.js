import express from 'express';
import { signup, loginUser, getLoggedInUser } from '../controllers/authController.js';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', loginUser);
router.get('/me', verifyToken, getLoggedInUser);

export default router;
