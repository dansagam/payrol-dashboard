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
         const { employeeId, periodStartAt } = data
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = { employeeId, periodStartAt }
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
         const { _id, tax, periodStartAt, periodEndAt } = data
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               'Content-Types': 'application/json',
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const newData1 = { tax, periodStartAt, periodEndAt }
         const response = await updatePayrollFunc(_id, newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
