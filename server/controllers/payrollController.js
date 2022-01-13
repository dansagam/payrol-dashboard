import employeeService from '../services/employeeServices.js'
import payrollService from '../services/payrollServices.js'
import { durationCalc, fDateDB } from '../utils/generalUtil.js'
import nextSequenceValue, { prevSequenceValue } from './counterController.js'
import accountService from '../services/accountService'

export const getPayrolls = async (req, res, next) => {
   try {
      const pageSize = 10
      const page = req.query.pageNumber || 1
      const response = await payrollService.getPayroll({}, pageSize, page)
      if (response) {
         res.status(201).json({
            success: true,
            count: response.length,
            data: {
               payrolls: response,
               page: page,
               pages: Math.ceil(response.length / pageSize),
            },
         })
      } else {
         res.status(401)
         throw new Error('No Payroll Found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

export const getPayrollByid = async (req, res, next) => {
   try {
      const payroll = await payrollService.getPayrollById(req.params.id)
      if (payroll) {
         res.status(201).json({
            success: true,
            data: payroll,
         })
      } else {
         res.status(401)
         throw new Error('No payroll found, please check the params')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

export const addNewPayroll = async (req, res, next) => {
   try {
      const { employeeId, periodStartAt } = req.body
      const existingPayroll = await payrollService.getPayrollByPath({
         $or: [
            { employeeId: employeeId, status: 'pending' },
            { employeeId: employeeId, status: 'active' },
         ],
      })
      if (existingPayroll) {
         res.status(401)
         throw new Error('Pleasing finalised the existing payroll')
      }
      const existingEmployee = await employeeService.getEmployeeById(employeeId)
      if (existingEmployee) {
         const startAt = `${fDateDB(periodStartAt)}Z`
         /**
          * I have to create an account controller here
          */
         const accounDetail = await accountService.getByPath({
            employeeId: employeeId,
         })
         if (!accounDetail) {
            throw new Error(
               'Account detail no found, please add the account details'
            )
         }
         const _id = await nextSequenceValue('employeeid')
         const newData = {
            _id: _id,
            employeeId: existingEmployee._id,
            accountid: accounDetail._id,
            periodStartAt: startAt,
            periodMode: existingEmployee.salaryMode,
            rate: existingEmployee.salaryAmount,
         }
         const payroll = await payrollService.addNewPayroll(newData)
         if (payroll) {
            res.status(201).json({
               success: true,
               data: payroll,
            })
         } else {
            await prevSequenceValue('payrollid')
            res.status(401)
            throw new Error('Payroll Not Created')
         }
      } else {
         res.status(404)
         throw new Error('Employee Detail not valid')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route PUT api/v2/payrolls/:id
    @desc 
    @access private
*/
export const updatePayroll = async (req, res, next) => {
   try {
      const { tax, periodStartAt, periodEndAt } = req.body
      const foundPayroll = await payrollService.getPayrollById(req.params.id)
      if (foundPayroll) {
         const startAt = periodStartAt ? `${fDateDB(periodStartAt)}Z` : null
         const endAt = periodEndAt ? `${fDateDB(periodEndAt)}Z` : null
         foundPayroll.periodStartAt = startAt || foundPayroll.periodStartAt
         foundPayroll.tax = tax || foundPayroll.tax
         foundPayroll.periodEndAt = endAt || foundPayroll.periodEndAt
         foundPayroll.periodDuration = durationCalc(
            foundPayroll.periodMode,
            foundPayroll.periodStartAt,
            foundPayroll.periodEndAt
         )
         const updatedPayroll = await payrollService.updatePayroll(
            foundPayroll._id,
            foundPayroll
         )
         if (updatedPayroll) {
            res.status(201).json({
               success: true,
               data: updatedPayroll,
            })
         } else {
            res.status(401)
            throw new Error('Payroll not updated')
         }
      } else {
         res.status(404)
         throw new Error('Payroll not found, please check the data')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
