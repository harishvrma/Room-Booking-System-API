import express from 'express'
import {registerUser ,loginUser} from "../controllers/authController.js"
import validate from '../middleware/validate.js';
import { loginValidator, registerValidator } from '../validators/authvalidators.js';

const router = express.Router();
router.post("/register", registerValidator,validate, registerUser  );
router.post("/login", loginValidator, validate, loginUser );

export default router;