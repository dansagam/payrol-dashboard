import { createSlice } from '@reduxjs/toolkit'
import {
   getPayment,
   getPaymentById,
   addNewPayment,
   updatePayment,
} from './AsyncSlice/paymentAsync'

export const paymentSlice = createSlice({
   name: 'payment',
   initialState: {
      isLoading: false,
      success: {
         getSuccess: false,
         getByIdSuccess: false,
         addSuccess: false,
         updateSuccess: false,
         deleteSuccess: false,
      },
      errors: {
         msg: '',
         status: undefined,
         id: null,
      },
      payment: {},
      payments: [],
   },
   reducers: {
      clearPaymentError: (state, action) => ({
         ...state,
         errors: {
            msg: '',
            status: undefined,
            id: null,
         },
      }),
   },
   extraReducers: {
      [getPayment.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            getSuccess: false,
         },
      }),
   },
})

export const { clearPaymentError } = paymentSlice.actions

export default paymentSlice.reducer
