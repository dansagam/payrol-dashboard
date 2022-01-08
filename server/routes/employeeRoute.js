import express from 'express'
import { getEmployee } from '../controllers/employeeControllers.js'
const router = express.Router()

router.route('/').get(getEmployee).post()
router.route('/:id').get().delete().put()
