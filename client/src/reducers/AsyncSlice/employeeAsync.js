import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getEmployeeByIdFunc,
   getEmployeeFunc,
   addNewEmployeeFunc,
   updateFinancialEmployeeFunc,
   updatePersonalEmployeeFunc,
   deleteEmployeeFunc,
} from '../../sliceFunction/employeeAsyncFunc'

export const getEmployees = createAsyncThunk(
   'employee/getEmployees',
   async ({ keyword = '', pageNumber = '' }, { rejectWithValue, getState }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await getEmployeeFunc({ keyword, pageNumber }, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const getEmployeeById = createAsyncThunk(
   'employee/getEmployeeById',
   async ({ _id }, { rejectWithValue, getState }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await getEmployeeByIdFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const addEmployee = createAsyncThunk(
   'employee/addEmployee',
   async (newData, { rejectWithValue, getState }) => {
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
         } = newData
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = {
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
         }
         const response = await addNewEmployeeFunc(newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
export const updateEmployeeFinancial = createAsyncThunk(
   'employee/updateEmployeeFinancial',
   async (newData, { rejectWithValue, getState }) => {
      try {
         const { _id, salaryAmount, salaryMode } = newData
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = {
            salaryAmount,
            salaryMode,
         }
         const response = await updateFinancialEmployeeFunc(
            (_id, newData1, config)
         )
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const updateEmployeePersonal = createAsyncThunk(
   'employee/updateEmployeePersonal',
   async (newData, { rejectWithValue, getState }) => {
      try {
         const {
            _id,
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
         } = newData
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = {
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
         }
         const response = await updatePersonalEmployeeFunc(
            _id,
            newData1,
            config
         )
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
export const deleteEmployee = createAsyncThunk(
   'employee/deleteEmployee',
   async ({ _id }, { rejectWithValue, getState }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await deleteEmployeeFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
