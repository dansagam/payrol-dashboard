import express from 'express'
import {
   getUserById,
   getUserProfile,
   getUsers,
   getUserReset,
   updateUser,
   updateUserProfile,
   deleteUser,
   loginUser,
   registerUser,
   userRecovery,
   resetPassword,
} from '../controllers/userController.js'
import {
   adminAuth,
   userAuth,
   userAccountOwnership,
} from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(userAuth, getUsers).post(registerUser)

router
   .route('/:id')
   .get(userAuth, adminAuth, getUserById)
   .put(userAuth, adminAuth, updateUser)
   .delete(userAuth, adminAuth, deleteUser)

router.route('/login').post(loginUser)

router
   .route('/:id/profile')
   .get(userAuth, getUserProfile)
   .put(userAuth, updateUserProfile)
   .delete(userAuth, userAccountOwnership, deleteUser)

router.route('/recover').post(userRecovery)

router.route('/reset/:token').get(getUserReset).post(resetPassword)

export default router
