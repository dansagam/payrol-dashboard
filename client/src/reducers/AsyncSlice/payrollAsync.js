import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getPayrollByIdFunc,
   getPayrollFunc,
   addNewPayrollFunc,
   updatePayrollFunc,
} from '../../sliceFunction/payrollAsyncFunc'

export const getPayment = createAsyncThunk(
   '',
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
         const response = await getPayrollFunc({ keyword, pageNumber }, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const getPaymentById = createAsyncThunk(
   '',
   async (data, { rejectWithValue, getState }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await getPayrollByIdFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const addNewPayroll = createAsyncThunk(
   '',
   async (data, { rejectWithValue, getState }) => {
      try {
         const { high } = data
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = { high }
         const response = await addNewPayrollFunc(newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const updatePayroll = createAsyncThunk(
   '',
   async (data, { rejectWithValue, getState }) => {
      try {
         const { _id } = data
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = {}
         const response = await updatePayrollFunc(_id, newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
