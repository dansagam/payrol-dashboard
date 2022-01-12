/* eslint-disable prettier/prettier */
import paymentService from '../services/paymentService.js'
import payrollService from '../services/payrollServices.js'
import { fDateDB } from '../utils/generalUtil.js'
import nextSequenceValue from './counterController.js'

export const getPayments = async (req, res, next) => {
   try {
      const pageSize = 10
      const page = req.query.pageNumber || 1
      const payments = await paymentService.getPayments({}, pageSize, page)
      if (payments) {
         res.status(201).json({
            success: true,
            count: payments.length,
            data: {
               payments: payments,
               page: page,
               pages: Math.ceil(payments.length / pageSize),
            },
         })
      } else {
         res.status(401)
         throw new Error('Payment not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

export const getPaymentById = async (req, res, next) => {
   try {
      const payment = await paymentService.getPaymentById(req.params.id)
      if (payment) {
         res.status(201).json({
            success: true,
            data: payment,
         })
      } else {
         res.status(401)
         throw new Error('No Payment found with the ID provided')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

export const addNewPayment = async (req, res, next) => {
   try {
      const { payrollId, paymentDate } = req.body
      const existingPayroll = await payrollService.getPayrollById(payrollId)
      if (existingPayroll) {
         const existingPayment = await paymentService.getPaymentByPath({
            payrollId: existingPayroll._id,
         })
         if (existingPayment) {
            if (existingPayment.paymentStatus === 'paid') {
               res.status(401)
               throw new Error('payment already paid')
            }
            // res.status(401)
            // throw new Error('payment plan create with the payrollId')
            existingPayment.paymentStatus =
               existingPayroll.paymentStatus || existingPayment.paymentStatus
            existingPayment.paymentFrequency =
               existingPayroll.periodDuration ||
               existingPayment.paymentFrequency
            existingPayment.paymentDate =
               `${fDateDB(paymentDate)}Z` || existingPayment.paymentDate
            existingPayment.rate = existingPayroll.rate || existingPayment.rate
            existingPayment.duration =
               existingPayroll.periodDuration || existingPayment.duration
            existingPayment.totalAmount =
               existingPayroll.rate * existingPayroll.periodDuration -
               existingPayroll.tax || existingPayment.totalAmount
            const updatedPayment = await paymentService.updatePayment(
               existingPayment._id,
               existingPayment
            )
            if (updatedPayment) {
               res.status(201).json({
                  success: true,
                  data: updatedPayment,
               })
            } else {
               res.status(401)
               throw new Error('Payment not updated')
            }
         } else {
            const _id = await nextSequenceValue('paymentid')
            const newData = {
               _id: _id,
               payrollId: existingPayroll._id,
               employeeId: existingPayroll.employeeId._id,
               accountId: existingPayroll.accountId._id,
               paymentFrequency: existingPayroll.periodMode,
               rate: existingPayroll.rate,
               duration: existingPayroll.periodDuration,
               totalAmount:
                  existingPayroll.periodDuration * existingPayroll.rate,
            }
            const payment = await paymentService.addNewPayment(newData)
            if (payment) {
               res.status(201).json({
                  success: true,
                  data: payment,
               })
            } else {
               res.status(401)
               throw new Error('Payment Plan not created')
            }
         }
      } else {
         res.status(404)
         throw new Error('Payroll could not be found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

export const updatePayment = async (req, res, next) => {
   try {
      const { payrollId, paymentDate, paymentStatus } = req.body
      const existingPayment = await paymentService.getPaymentById(req.params.id)
      if (existingPayment) {
         existingPayment.paymentDate =
            `${fDateDB(paymentDate)}Z` || existingPayment.paymentDate
         existingPayment.paymentStatus =
            paymentStatus || existingPayment.paymentStatus
         const updatedPayment = await paymentService.updatePayment(
            existingPayment._id,
            existingPayment
         )
         if (updatedPayment) {
            res.status(201).json({
               success: true,
               data: updatedPayment,
            })
         } else {
            res.status(401)
            throw new Error('payment not updated')
         }
      } else {
         res.status(404)
         throw new Error('Payment does not exist')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
