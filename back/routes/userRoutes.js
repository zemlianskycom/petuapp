import express from 'express'
import { registerUser } from '../controllers/user/regController.js'
import { getUserProfile } from '../controllers/userController.js'

const router = express.Router()

router.route('/profile').get(getUserProfile)
router.route('/').post(registerUser)

export default router
