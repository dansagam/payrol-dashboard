import express from 'express'
import {
   getPayments,
   addNewPayment,
   getPaymentById,
   updatePayment,
} from '../controllers/paymentController.js'
import { adminAuth, userAuth } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.route('/').get(userAuth, getPayments).post(userAuth, addNewPayment)
router
   .route('/:id')
   .get(userAuth, getPaymentById)
   .put(userAuth, adminAuth, updatePayment)

export default router
