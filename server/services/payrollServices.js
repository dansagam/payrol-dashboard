import Payroll from '../models/payrollModel.js'
import { prevSequenceValue } from '../controllers/counterController.js'

const getPayroll = async (queryData, pageSize, page) => {
   const result = await Payroll.find(queryData)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .populate({
         path: 'employeeId',
         select: '-lastName',
      })
      .populate({
         path: 'accountId',
      })
   if (result) {
      return result
   } else {
      throw new Error('No Payroll Found')
   }
}

const getPayrollById = async (id) => {
   const result = await Payroll.findById(id)
      .populate({
         path: 'employeeId',
      })
      .populate({
         path: 'accountId',
      })
   if (result) {
      return result
   } else {
      throw new Error('No Payroll Found')
   }
}
const getPayrollByPath = async (newQuery) => {
   const result = await Payroll.findOne(newQuery)
      .populate({
         path: 'employeeId',
      })
      .populate({
         path: 'accountId',
      })
   if (result) {
      return result
   } else return false
}
const getAllPayrollByPath = async (newQuery) => {
   const result = await Payroll.find(newQuery)
      .populate({
         path: 'employeeId',
      })
      .populate({
         path: 'accountId',
      })
   if (result) {
      return result
   } else return false
}

const addNewPayroll = async (newData) => {
   const result = await Payroll.create(newData)
   if (result) {
      return result
   } else {
      await prevSequenceValue('payrollid')
      throw new Error('payroll no created')
   }
}

const updatePayroll = async (id, newData) => {
   const result = await Payroll.findByIdAndUpdate(id, newData, { new: true })
   if (result) {
      return result
   } else {
      throw new Error('Pay could not be updated, please your your data')
   }
}

const payrollService = {
   getPayroll: getPayroll,
   getPayrollById: getPayrollById,
   addNewPayroll: addNewPayroll,
   updatePayroll: updatePayroll,
   getAllPayrollByPath: getAllPayrollByPath,
   getPayrollByPath: getPayrollByPath,
}

export default payrollService
