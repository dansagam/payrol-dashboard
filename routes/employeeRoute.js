import express from 'express'
import {
   getEmployee,
   getEmployeeByid,
   deleteEmployee,
   updateEmployeeFinancial,
   updateEmployeePersonal,
   createNewEmployee,
} from '../controllers/employeeControllers.js'
import { userAuth, adminAuth } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.route('/').get(userAuth, getEmployee).post(userAuth, createNewEmployee)
router
   .route('/:id')
   .get(userAuth, getEmployeeByid)
   .delete(userAuth, deleteEmployee)
   .put()
router.route('/:id/personal').put(userAuth, updateEmployeePersonal)
router.route('/:id/finance').put(userAuth, adminAuth, updateEmployeeFinancial)

export default router
