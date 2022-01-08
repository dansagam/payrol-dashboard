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

export { getEmployeeById, getEmployees }
