import { prevSequenceValue } from '../controllers/counterController.js'
import Payment from '../models/paymentModel.js'

const getPayments = async (query, pageSize, page) => {
   const result = await Payment.find(query)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
   if (result) {
      return result
   } else return false
}

const getPaymentById = async (id) => {
   const result = await Payment.findById(id)
   if (result) {
      return result
   } else return false
}

const getAllPaymentsByPath = async (newParam) => {
   const result = await Payment.find(newParam)
   if (result) {
      return result
   } else return false
}

const getPaymentByPath = async (newParam) => {
   const result = await Payment.findOne(newParam)
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

const paymentService = {
   getPaymentById: getPaymentById,
   getPayments: getPayments,
   addNewPayment: addNewPayment,
   getAllPaymentsByPath: getAllPaymentsByPath,
   getPaymentByPath: getPaymentByPath,
}

export default paymentService
