import express from 'express'
import {
   getAccounts,
   createNewAccount,
   getAccountById,
   updateAccount,
} from '../controllers/accountController.js'
import { userAuth, adminAuth } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.route('/').get(userAuth, getAccounts).post(userAuth, createNewAccount)
router
   .route('/:id')
   .get(userAuth, adminAuth, getAccountById)
   .put(userAuth, adminAuth, updateAccount)

export default router
