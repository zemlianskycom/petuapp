import express from 'express'

import { authUser } from '../controllers/user/authController.js'
import { registerUser } from '../controllers/user/regController.js'
import { getUserProfile } from '../controllers/userController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/profile').get(protect, getUserProfile)
router.route('/login').post(authUser)
router.route('/').post(registerUser)

export default router
