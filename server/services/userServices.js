import { prevSequenceValue } from '../controllers/counterController.js'
import User from '../models/userModel.js'

const getUsers = async (query, pageSize, page) => {
   const result = await User.find(query)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
   if (result && result.length > 0) {
      return result
   } else {
      throw new Error('No User Found')
   }
}

const getUserById = async (id) => {
   const result = await User.findById(id)
   if (result) {
      return result
   } else {
      throw new Error('No user by the provided id')
   }
}

const getAllUserByPath = async (newParam) => {
   const result = await User.find(newParam)
   if (result && result.length > 0) {
      return result
   } else {
      throw new Error('No user foun')
   }
}
const getUserByPath = async (newParam) => {
   const result = await User.findOne(newParam)
   if (result) {
      return result
   }
}

const registerUser = async (newData) => {
   const result = await User.create(newData)
   if (result) {
      return result
   } else {
      await prevSequenceValue('userid')
      throw new Error('User not created')
   }
}

const deleteUser = async (id) => {
   const result = await User.findByIdAndDelete(id)
   if (result) {
      return result
   } else {
      throw new Error('User cannot be deleted, invalid id')
   }
}

const updateUser = async (id, newData) => {
   const result = await User.findByIdAndUpdate(id, newData, { new: true })
   if (result) {
      return result
   } else {
      throw new Error('data provided not sufficient for update')
   }
}

const userServices = {
   getUsers: getUsers,
   getUserById: getUserById,
   getAllUserByPath: getAllUserByPath,
   getUserByPath: getUserByPath,
   updateUser: updateUser,
   deleteUser: deleteUser,
   registerUser: registerUser,
}

export default userServices
