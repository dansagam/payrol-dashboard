import { createSlice } from '@reduxjs/toolkit'
import {
   getAccountById,
   getAccounts,
   addNewAccount,
   updateAccount,
} from './AsyncSlice/accountAsync'

export const accountSlice = createSlice({
   name: 'account',
   initialState: {
      accounts: [],
      account: {},
      page: null,
      pages: null,
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
   },
   reducers: {
      clearAccountError: (state, action) => ({
         ...state,
         errors: {
            msg: '',
            status: undefined,
            id: null,
         },
      }),
   },
   extraReducers: {
      [getAccountById.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            getSuccess: false,
         },
      }),
      [getAccountById.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               account: action.payload,
               isLoading: false,
               success: {
                  getSuccess: true,
               },
            }
         }
         return state
      },
      [getAccountById.rejected]: (state, action) => ({
         ...state,
         success: {
            getSuccess: false,
         },
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
      [getAccounts.pending]: (state, action) => ({
         ...state,
         success: {
            getSuccess: false,
         },
         isLoading: true,
      }),
      [getAccounts.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  getSuccess: true,
               },
               accounts: action.payload,
            }
         }

         return state
      },
      [getAccounts.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         success: {
            getSuccess: true,
         },
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
      [addNewAccount.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            addSuccess: false,
         },
      }),
      [addNewAccount.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         success: {
            addSuccess: false,
         },
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
      [addNewAccount.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  addSuccess: true,
               },
               accounts: [state.accounts, action.payload],
            }
         }
         return state
      },
      [updateAccount.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            updateSuccess: false,
         },
      }),
      [updateAccount.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: true,
               success: {
                  updateSuccess: true,
               },
               account: action.payload,
            }
         }
         return state
      },
      [updateAccount.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         success: {
            updateSuccess: false,
         },
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
   },
})

export const { clearAccountError } = accountSlice.actions

export default accountSlice.reducer
