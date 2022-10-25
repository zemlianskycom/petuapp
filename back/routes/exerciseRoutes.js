import express from 'express'
import { addNewExercise } from '../controllers/exercise/exerciseController.js'

// only auth users can use exercise
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addNewExercise)

export default router
