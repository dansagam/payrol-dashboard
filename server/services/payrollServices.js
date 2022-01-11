import Payroll from '../models/payrollModel.js'

const getPayroll = async (queryData = {}) => {
   const result = await Payroll.find(queryData)
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

const addNewPayroll = async (newData) => {
   const result = await Payroll.create(newData)
   if (result) {
      return result
   } else {
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
}

export default payrollService
