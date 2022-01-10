import Employee from '../models/employeeModel.js'

const getEmployees = async () => {
   const response = await Employee.find()
   if (response) {
      return response
   } else {
      throw new Error('No Employee found')
   }
}

const getEmployeeById = async (id) => {
   const result = await Employee.findById(id)
   if (result) {
      return result
   } else {
      throw new Error('No Employee data found')
   }
}
const getEmpoyeeByPath = async (newQuery) => {
   const result = await Employee.findOne(newQuery)
   if (result) {
      return result
   } else {
      throw new Error('No Employee Found')
   }
}

const getAllEmployeesByPath = async (newQuery) => {
   const result = await Employee.find(newQuery)
   if (result) {
      return result
   } else {
      throw new Error('No Employee Found')
   }
}
const createEmployee = async (newData) => {
   const result = await Employee.create(newData)
   if (result) {
      return result
   } else {
      throw new Error('Employee could not be created, please check the details')
   }
}

const deleteEmployee = async (id) => {
   const result = await Employee.findByIdAndDelete(id)
   if (result) {
      return result
   } else {
      throw new Error('Employee not deleted')
   }
}

const updateEmployee = async (id, newData) => {
   const result = await Employee.findByIdAndUpdate(id, newData, { new: true })
   if (result) {
      return result
   } else {
      throw new Error('Details cannot be updated, kindly check the data')
   }
}
const employeeService = {
   getEmployeeById: getEmployeeById,
   getEmployees: getEmployees,
   deleteEmployee: deleteEmployee,
   createEmployee: createEmployee,
   updateEmployee: updateEmployee,
   getAllEmployeesByPath: getAllEmployeesByPath,
   getEmpoyeeByPath: getEmpoyeeByPath,
}
export default employeeService
