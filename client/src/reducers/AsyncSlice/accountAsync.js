import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getAccountByIdFunc,
   getAccountFunc,
   addNewAccountFunc,
   updateAccountFunc,
} from '../../sliceFunction/accountAsyncFunc'

export const getAccounts = createAsyncThunk(
   'account/getAccounts',
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
         const response = await getAccountFunc({ keyword, pageNumber }, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
export const getAccountById = createAsyncThunk(
   'account/getAccountById',
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
         const response = await getAccountByIdFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const addNewAccount = createAsyncThunk(
   'account/addNewAccount',
   async (newData, { rejectWithValue, getState }) => {
      try {
         const { accountNumber, accountName, bankName, employeeId } = newData
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = { accountNumber, accountName, bankName, employeeId }
         const response = await addNewAccountFunc(newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
export const updateAccount = createAsyncThunk(
   'account/updateAccount',
   async (newData, { rejectWithValue, getState }) => {
      try {
         const { accountName, name, accountNumber, bankName } = newData
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
            accountName,
            name,
            accountNumber,
            bankName,
         }
         const response = await updateAccountFunc(id, newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
