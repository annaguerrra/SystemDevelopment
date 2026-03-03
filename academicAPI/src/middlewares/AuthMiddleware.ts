import express from 'express';
import UserController from '../controller/userController.js';
import { validateLogin, validateRegister } from './AuthController.js';

const router = express.Router();

router.post('/register', validateRegister, UserController.registerUser)