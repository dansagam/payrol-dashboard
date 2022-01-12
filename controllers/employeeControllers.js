/* eslint-disable prettier/prettier */
// import Employee from '../models/employeeModel.js'
import employeeService from '../services/employeeServices.js'
import nextSequenceValue, { prevSequenceValue } from './counterController.js'

export const getEmployee = async (req, res, next) => {
   try {
      const pageSize = 10
      const page = req.query.pageNumber || 1
      const keywordSplit = req.query.keyword ? req.query.keyword.split(' ') : []
      console.log(keywordSplit, keywordSplit.length)
      if (keywordSplit.length > 1) {
         keywordSplit[1] = keywordSplit[1] ? keywordSplit[1] : ''
         keywordSplit[0] = keywordSplit[0] ? keywordSplit[0] : ''
      }
      keywordSplit[0] = keywordSplit[0] ? keywordSplit[0] : ''
      console.log(keywordSplit, keywordSplit.length)
      const keyword = req.query.keyword && keywordSplit.length === 2
         ? {
            firstName: {
               $regex: `${keywordSplit[0]}|${keywordSplit[1]}`,
               $options: 'i',
            },
            lastName: {
               $regex: `${keywordSplit[1]}|${keywordSplit[0]}`,
               $options: 'i',
            },
         }
         : req.query.keyword && keywordSplit.length === 1
            ? {
               $or: [
                  {
                     firstName: {
                        $regex: `${keywordSplit[0]}`,
                        $options: 'i',
                     },
                  },
                  {
                     lastName: {
                        $regex: `${keywordSplit[0]}`,
                        $options: 'i',
                     },
                  }

               ]
            } : {}
      // if (req.query.keyword && keywordSplit.length === 1) {
      //    console.log('sss')
      //    keyword = {
      //       $or: [
      //          {
      //             firstName: {
      //                $regex: `${keywordSplit[0]}`,
      //                $options: 'i',
      //             },
      //          },
      //          {
      //             lastName: {
      //                $regex: `${keywordSplit[0]}`,
      //                $options: 'i',
      //             },
      //          }

      //       ]
      //    }
      // } else if (req.query.keyword && keywordSplit.length === 2) {
      //    console.log()
      //    keyword = {
      //       firstName: {
      //          $regex: `${keywordSplit[0]}|${keywordSplit[1]}`,
      //          $options: 'i',
      //       },
      //       lastName: {
      //          $regex: `${keywordSplit[1]}|${keywordSplit[0]}`,
      //          $options: 'i',
      //       },
      //    }
      // } else keyword = {}
      console.log({ ...keyword })
      const employee = await employeeService.getEmployees({ ...keyword }, pageSize, page)
      if (employee) {
         res.status(201).json({
            success: true,
            count: employee.length,
            data: {
               employees: employee,
               page: page,
               pages: Math.ceil(employee.length / pageSize)
            },
         })
      } else {
         res.status(401)
         throw new Error('No Employee found')
      }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const getEmployeeByid = async (req, res, next) => {
   try {
      const employee = await employeeService.getEmployeeById(req.params.id)
      if (employee) {
         res.status(201).json({
            success: true,
            data: employee,
         })
      } else {
         res.status(401)
         throw new Error('Employee not found')
      }
   } catch (err) {
      res.status(400)
      next(err)
   }
}

export const updateEmployeePersonal = async (req, res, next) => {
   try {
      const {
         avatar,
         firstName,
         lastName,
         prefix,
         suffix,
         primaryEmail,
         personalEmail,
         dob,
         address,
         contact,
      } = req.body
      const { mobileNumber, secPhoneNumber } = contact
      const { line, city, state, country } = address
      const employee = await employeeService.getEmployeeById(req.params.id)
      if (employee) {
         employee.firstName = firstName || employee.firstName
         employee.lastName = lastName || employee.lastName
         employee.prefix = prefix || employee.prefix
         if (suffix) {
            employee.suffix = suffix
         }
         employee.primaryEmail = primaryEmail || employee.primaryEmail
         employee.personalEmail = personalEmail || employee.personalEmail
         employee.dob = dob || employee.dob
         employee.contact.mobileNumber =
            mobileNumber || employee.contact.mobileNumber
         employee.contact.secPhoneNumber =
            secPhoneNumber || employee.contact.secPhoneNumber
         employee.address.line = line || employee.address.line
         employee.address.state = state || employee.address.state
         employee.address.country = country || employee.address.country
         employee.address.city = city || employee.address.city
         const updatedEmployee = await employeeService.updateEmployee(
            employee._id,
            employee
         )
         if (updatedEmployee) {
            res.status(201).json({
               success: true,
               data: updatedEmployee,
            })
         } else {
            res.status(400)
            throw new Error('Employee Personal Detail cannot be updated')
         }
      } else {
         res.status(404)
         throw new Error('Employe with the Id not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
export const updateEmployeeFinancial = async (req, res, next) => {
   try {
      const { salaryAmount, salaryMode } = req.body
      const employee = await employeeService.getEmployeeById(req.params.id)
      if (employee) {
         employee.salaryAmount = salaryAmount || employee.salaryAmount
         employee.salaryMode = salaryMode || employee.salaryMode
         const updatedEmployee = await employeeService.updateEmployee(
            employee._id,
            employee
         )
         if (updatedEmployee) {
            res.status(201).json({
               success: true,
               data: updatedEmployee,
            })
         } else {
            res.status(401)
            throw new Error('Employee not updated, check the data provided')
         }
      } else {
         res.status(404)
         throw new Error('Employee with the id not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
export const deleteEmployee = async (req, res, next) => {
   try {
      const employee = await employeeService.deleteEmployee(req.params.id)
      if (employee) {
         res.status(201).json({
            success: true,
            data: employee,
         })
      } else {
         res.status(404)
         throw new Error('employee could not be deleted')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
export const createNewEmployee = async (req, res, next) => {
   try {
      const {
         avatar,
         firstName,
         lastName,
         prefix,
         suffix,
         primaryEmail,
         personalEmail,
         contact,
         salaryAmount,
         salaryMode,
         address,
         role,
         dob,
         workerStatus,
      } = req.body
      const { mobileNumber, secPhoneNumber } = contact

      const { line, city, state, country } = address
      const { originalHireDate } = workerStatus
      const existingEmployee = await employeeService.getEmpoyeeByPath({
         primaryEmail: primaryEmail,
         firstName: firstName,
      })
      if (existingEmployee) {
         res.status(401)
         throw new Error('Employee Already Exist')
      }
      const _id = await nextSequenceValue('employeeid')
      const newData = {
         _id: _id,
         avatar: avatar || '',
         firstName: firstName,
         lastName: lastName,
         prefix: prefix || 'Mr',
         suffix: suffix || '',
         primaryEmail: primaryEmail || null,
         personalEmail: personalEmail || null,
         contact: {
            mobileNumber: mobileNumber,
            secPhoneNumber: secPhoneNumber,
         },
         salaryAmount: salaryAmount,
         salaryMode: salaryMode,
         role: role,
         address: {
            line: line || null,
            state: state || null,
            city: city || null,
            country: country || null,
         },
         dob: dob,
         workerStatus: {
            originalHireDate: originalHireDate || Date.now(),
         },
      }
      const employee = await employeeService.createEmployee(newData)
      if (employee) {
         res.status(201).json({
            success: true,
            data: employee,
         })
      } else {
         res.status(401)
         throw new Error('User Not Created, check you data')
      }
   } catch (err) {
      if (err._message === 'Employee validation failed') {
         await prevSequenceValue('employeeid')
      }
      res.status(404)
      next(err)
   }
}
