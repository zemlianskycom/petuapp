import express from 'express'
import {
  addNewWorkout,
  getWorkout,
} from '../controllers/workout/workoutController.js'

// only auth users can use workout
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, addNewWorkout)
router.route('/:id').post(protect, getWorkout)

export default router
