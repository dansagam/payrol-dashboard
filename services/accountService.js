import EmployeeAccountDetail from '../models/accountModel.js'

const getAccounts = async (query, pageSize, page) => {
   const result = await EmployeeAccountDetail.find(query)
      .populate({
         path: 'employeeId',
      })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
   if (result && result.length > 0) {
      return result
   } else return false
}

const getAccountById = async (id) => {
   const result = await EmployeeAccountDetail.findById(id).populate({
      path: 'employeeId',
   })
   if (result) {
      return result
   } else return false
}

const getByPath = async (newQuery) => {
   const result = await EmployeeAccountDetail.findOne(newQuery).populate({
      path: 'employeeId',
   })
   if (result) {
      return result
   } else return false
}

const getAllByPath = async (newQuery) => {
   const result = await EmployeeAccountDetail.find(newQuery).populate({
      path: 'employeeId',
   })
   if (result && result.length > 0) {
      return result
   } else return false
}

const addNewAccount = async (newData) => {
   const result = await EmployeeAccountDetail.create(newData)
   if (result) {
      return result
   } else return false
}

const updateAccount = async (id, newData) => {
   const result = await EmployeeAccountDetail.findByIdAndUpdate(id, newData, {
      new: true,
   }).populate({
      path: 'employeeId',
   })
   if (result) {
      return result
   } else return false
}

const accountService = {
   getAccountById: getAccountById,
   getAccounts: getAccounts,
   getAllByPath: getAllByPath,
   getByPath: getByPath,
   addNewAccount: addNewAccount,
   updateAccount: updateAccount,
}

export default accountService
