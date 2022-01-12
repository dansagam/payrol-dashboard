import { prevSequenceValue } from '../controllers/counterController.js'
import Payment from '../models/paymentModel.js'

const getPayments = async (query, pageSize, page) => {
   const result = await Payment.find(query)
      .populate({ path: 'employeeId' })
      .populate({ path: 'accountId' })
      .populate({ path: 'payrollId' })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
   if (result && result.length > 0) {
      return result
   } else return false
}

const getPaymentById = async (id) => {
   const result = await Payment.findById(id)
      .populate({ path: 'employeeId' })
      .populate({ path: 'accountId' })
      .populate({ path: 'payrollId' })
   if (result) {
      return result
   } else return false
}

const getAllPaymentsByPath = async (newParam) => {
   const result = await Payment.find(newParam)
      .populate({ path: 'employeeId' })
      .populate({ path: 'accountId' })
      .populate({ path: 'payrollId' })
   if (result && result.length > 0) {
      return result
   } else return false
}

const getPaymentByPath = async (newParam) => {
   const result = await Payment.findOne(newParam)
      .populate({ path: 'employeeId' })
      .populate({ path: 'accountId' })
      .populate({ path: 'payrollId' })
   if (result) {
      return result
   } else return false
}

const addNewPayment = async (newData) => {
   const result = await Payment.create(newData)
   if (result) {
      return result
   } else {
      await prevSequenceValue('paymentid')
      return false
   }
}
const updatePayment = async (id, newData) => {
   const result = await Payment.findByIdAndUpdate(id, newData, { new: true })
      .populate({ path: 'employeeId' })
      .populate({ path: 'accountId' })
      .populate({ path: 'payrollId' })
   if (result) {
      return result
   } else return false
}

const paymentService = {
   getPaymentById: getPaymentById,
   getPayments: getPayments,
   addNewPayment: addNewPayment,
   getAllPaymentsByPath: getAllPaymentsByPath,
   getPaymentByPath: getPaymentByPath,
   updatePayment: updatePayment,
}

export default paymentService
