import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getPaymentByIdFunc,
   getPaymentFunc,
   updatePaymentFunc,
   addNewPaymentFunc,
} from '../../sliceFunction/paymentAsyncFunc'

export const getPayment = createAsyncThunk(
   'payment/getPayment',
   async ({ keyword = '', pageNumber = '' }, { rejectWithValue }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await getPaymentFunc({ keyword, pageNumber }, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
export const getPaymentById = createAsyncThunk(
   'payment/getPaymentById',
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
         const response = await getPaymentByIdFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const addNewPayment = createAsyncThunk(
   'payment/addNewPayment',
   async (newData, { rejectWithValue, getState }) => {
      try {
         const { payrollId, paymentDate } = newData
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
            payrollId,
            paymentDate,
         }
         const response = await addNewPaymentFunc(newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const updatePayment = createAsyncThunk(
   'payment/updatePayment',
   async (newData, { rejectWithValue, getState }) => {
      try {
         const { payrollId, paymentDate, paymentStatus } = newData
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
            payrollId,
            paymentDate,
            paymentStatus,
         }
         const response = await updatePaymentFunc(_id, newData1, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
