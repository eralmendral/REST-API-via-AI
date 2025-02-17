import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// User registration route
router.post('/signup', userController.signup);

// User login route
router.post('/login', userController.login);

export default router; 