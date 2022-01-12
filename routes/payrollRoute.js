import express from 'express'
import {
   addNewPayroll,
   getPayrollByid,
   getPayrolls,
   updatePayroll,
} from '../controllers/payrollController.js'
import { userAuth, adminAuth } from '../middlewares/authMiddleware.js'
const router = express.Router()

router
   .route('/')
   .get(userAuth, getPayrolls)
   .post(userAuth, adminAuth, addNewPayroll)

router
   .route('/:id')
   .get(userAuth, getPayrollByid)
   .put(userAuth, adminAuth, updatePayroll)

export default router
