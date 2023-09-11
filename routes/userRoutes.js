import express from "express";
const router = express.Router();
import { userRegistration } from '../controllers/userController.js'
import { loginform } from "../controllers/userController.js"

// piblic routes
router.post('/register', userRegistration)
router.post('/loginform', loginform)


export default router