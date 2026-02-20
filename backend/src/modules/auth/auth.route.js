import { Router } from 'express';

import { signup, logout } from './auth.controller.js';

const router = Router()

router.post('/signup', signup)
router.post('/logout', logout)

export default router;