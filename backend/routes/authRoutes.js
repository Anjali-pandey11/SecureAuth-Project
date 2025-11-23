import express from 'express';

import { Signup,Login } from '../controllers/authContollers.js';
import { loginValidate, signupvalidation } from '../middlewares/authValidation.js';

const router = express.Router();

router.post('/register',signupvalidation,Signup)

router.post('/login',loginValidate,Login)

export default router;

