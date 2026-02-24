import { Router } from 'express';

import { signup, checkAuth, logout, login, verifyEmail, forgotPassword, resetPassword } from './auth.controller.js';
import { verifyToken } from '../../middleware/verifyToken.js';

const router = Router()

router.get("/check-auth", verifyToken, checkAuth)
router.post('/signup', signup)
router.post('/logout', logout)
router.post("/login", login)
router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)

export default router;