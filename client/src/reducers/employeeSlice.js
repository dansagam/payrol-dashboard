import { createSlice } from '@reduxjs/toolkit'
import {
   getEmployees,
   getEmployeeById,
   addEmployee,
   deleteEmployee,
   updateEmployeeFinancial,
   updateEmployeePersonal,
} from './AsyncSlice/employeeAsync'

export const employeeSlice = createSlice({
   name: 'employees',
   initialState: {
      employees: [],
      employee: {},
      pages: null,
      page: null,
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
      clearEmployeeError: (state, action) => ({
         ...state,
         errors: {
            msg: '',
            status: undefined,
            id: null,
         },
      }),
   },
   extraReducers: {
      [getEmployees.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            getSuccess: false,
         },
      }),
      [getEmployees.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  getSuccess: true,
               },
               employees: action.payload.employees,
               page: action.payload.page,
               pages: action.payload.pages,
            }
         }
         return state
      },
      [getEmployees.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         success: {
            getSuccess: false,
         },
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
      [getEmployeeById.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            getByIdSuccess: true,
         },
      }),
      [getEmployeeById.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               success: {
                  getByIdSuccess: false,
               },
               employee: action.payload,
            }
         }
         return state
      },
      [getEmployeeById.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
      [addEmployee.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            addSuccess: false,
         },
      }),
      [addEmployee.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  addSuccess: true,
               },
               employees: [state.employees, action.payload],
            }
         }
         return state
      },
      [addEmployee.rejected]: (state, action) => ({
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
      [updateEmployeePersonal.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            updateSuccess: false,
         },
      }),
      [updateEmployeePersonal.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  updateSuccess: true,
               },
               employee: action.payload,
            }
         }
         return state
      },
      [updateEmployeePersonal.rejected]: (state, action) => ({
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
      [updateEmployeeFinancial.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            updateSuccess: false,
         },
      }),
      [updateEmployeeFinancial.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  updateSuccess: true,
               },
            }
         }
         return state
      },
      [updateEmployeeFinancial.rejected]: (state, action) => ({
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
      [deleteEmployee.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            deleteSuccess: false,
         },
      }),
      [deleteEmployee.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  deleteSuccess: true,
               },
               employees: state.employees.filter(
                  (item) => item._id !== action.payload
               ),
            }
         }
         return state
      },
      [deleteEmployee.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         success: {
            deleteSuccess: false,
         },
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
   },
})

export const { clearEmployeeError } = employeeSlice.actions

export default employeeSlice.reducer
