import accountService from '../services/accountService.js'
import employeeService from '../services/employeeServices.js'
import nextSequenceValue, { prevSequenceValue } from './counterController.js'

export const getAccounts = async (req, res, next) => {
   try {
      const pageSize = 10
      const page = req.query.pageNumber || 1
      const accounts = await accountService.getAccounts({}, pageSize, page)
      if (accounts) {
         res.status(201).json({
            success: true,
            count: accounts.length,
            data: {
               accounts: accounts,
               page: page,
               pages: Math.ceil(accounts.length / pageSize),
            },
         })
      } else {
         res.status(401)
         throw new Error('No Account Found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

export const getAccountById = async (req, res, next) => {
   try {
      const account = await accountService.getAccountById(req.params.id)
      if (account) {
         res.status(201).json({
            success: true,
            data: account,
         })
      } else {
         res.status(401)
         throw new Error('No Employee Account Found, check the params')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
export const createNewAccount = async (req, res, next) => {
   try {
      const { accountNumber, accountName, bankName, employeeId } = req.body
      const existingAccount = await accountService.getByPath({
         employeeId: employeeId,
      })
      if (existingAccount) {
         res.status(401)
         throw new Error('Employer Already has an bank detail')
      }
      const employee = await employeeService.getEmployeeById(employeeId)
      if (employee) {
         const _id = nextSequenceValue('employeeaccoutid')
         const newData = {
            _id: _id,
            accountName: accountName,
            accountNumber: accountNumber,
            bankName: bankName,
         }
         const newAccount = await accountService.addNewAccount(newData)
         if (newAccount) {
            res.status(201).json({
               success: true,
               data: newAccount,
            })
         } else {
            res.status(401)
            throw new Error('Account no created, check you data')
         }
      } else {
         res.status(404)
         throw new Error('Employee detail not found')
      }
   } catch (err) {
      if (err._message === 'EmployeeAccountDetail validation failed') {
         await prevSequenceValue('employeeaccoutid')
      }
      res.status(404)
      next(err)
   }
}
/*
    @route PUT api/v2/accounts/:id
    @desc update the detail of the account
    @access private/ADMIN
*/
export const updateAccount = async (req, res, next) => {
   try {
      const { accountName, name, accountNumber, bankName } = req.body
      const existingAccount = await accountName.getAccountById(req.params.id)
      if (existingAccount) {
         existingAccount.accountName =
            accountName || existingAccount.accountName
         existingAccount.accountNumber =
            accountNumber || existingAccount.accountNumber
         existingAccount.bankName = bankName || existingAccount.bankName
         const account = await accountService.updateAccount(
            existingAccount._id,
            existingAccount
         )
         if (account) {
            res.status(201).json({
               success: true,
               data: account,
            })
         } else {
            res.status(401)
            throw new Error('Account could no be updated')
         }
      } else {
         res.status(404)
         throw new Error('Account Detail Not Found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
