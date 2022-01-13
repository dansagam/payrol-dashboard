import { createSlice } from '@reduxjs/toolkit'
import {
   getUserById,
   getUsers,
   loginUser,
   registerUser,
   deleteUser,
   deleteUserSelf,
   getUserProfile,
} from './AsyncSlice/userAsync'

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null
const userSlice = createSlice({
   name: 'user',
   initialState: {
      users: [],
      user: {},
      userLogin: {
         userInfo: userInfoFromStorage,
      },
      pages: null,
      page: null,
      isAuthenticated: null,
      isLoading: false,
      success: {
         getSuccess: false,
         getByIdSuccess: false,
         addSuccess: false,
         updateSuccess: false,
         loginSuccess: false,
         deleteSuccess: false,
      },
      errors: {
         msg: '',
         status: undefined,
         id: null,
      },
   },
   reducers: {
      // eslint-disable-next-line no-unused-vars
      logoutSuccess: (state, action) => {
         localStorage.removeItem('userInfo')
         return {
            ...state,
            user: {},
            users: [],
            userLogin: {
               userInfo: {},
            },
         }
      },
      clearError: (state, action) => ({
         ...state,
         errors: {
            msg: '',
            status: undefined,
            id: null,
         },
      }),
   },
   extraReducers: {
      [getUsers.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            getSuccess: false,
         },
      }),
      [getUsers.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               success: {
                  getSuccess: true,
               },
               pages: action.payload.pages,
               page: action.payload.page,
               users: action.payload.users,
            }
         }
         return state
      },
      [getUsers.rejected]: (state, action) => ({
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
      [getUserById.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            getByIdSuccess: false,
         },
      }),
      [getUserById.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               user: action.payload,
               success: {
                  getByIdSuccess: true,
               },
               isLoading: false,
            }
         }
         return state
      },
      [getUserById.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
         success: {
            getByIdSuccess: false,
         },
      }),
      [loginUser.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            loginSuccess: false,
         },
      }),
      [loginUser.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               ...action.payload,
               isAuthenticated: true,
               success: {
                  loginSuccess: true,
               },
               isLoading: false,
               userLogin: {
                  userInfo: action.payload,
               },
            }
         }
         return state
      },
      [loginUser.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
         success: {
            loginSuccess: false,
         },
         isAuthenticated: false,
      }),
      [registerUser.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            loginSuccess: false,
         },
      }),
      [registerUser.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               ...action.payload,
               isLoading: false,
               isAuthenticated: false,
               userLogin: {
                  userInfo: action.payload,
               },
               success: {
                  loginSuccess: false,
               },
            }
         }
         return state
      },
      [registerUser.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         isAuthenticated: false,
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
      }),
      [getUserProfile.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: { getSuccess: false },
      }),
      [getUserProfile.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               user: action.payload,
               success: {
                  getByIdSuccess: true,
               },
            }
         }
         return state
      },
      [getUserProfile.rejected]: (state, action) => ({
         ...state,
         isLoading: false,
         errors: {
            msg: action.payload.data.message,
            status: action.payload.status,
            id: action.payload.statusText,
         },
         success: {
            getByIdSuccess: false,
         },
      }),
      [deleteUser.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: {
            deleteSuccess: false,
         },
      }),
      [deleteUser.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               users: state.users.filter((user) => user._id !== action.payload),
               success: {
                  deleteSuccess: true,
               },
            }
         }
         return state
      },
      [deleteUser.rejected]: (state, action) => ({
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
      [deleteUserSelf.pending]: (state, action) => ({
         ...state,
         isLoading: true,
         success: { deleteSuccess: false },
      }),
      [deleteUserSelf.fulfilled]: (state, action) => {
         if (action.payload != null && typeof action.payload !== 'undefined') {
            return {
               ...state,
               isLoading: false,
               users: state.users.filter((user) => user._id !== action.payload),
               success: {
                  deleteSuccess: true,
               },
               isAuthenticated: false,
            }
         }
         return state
      },
      [deleteUserSelf.rejected]: (state, action) => ({
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

export const { clearError, logoutSuccess } = userSlice.actions

function escapeRegex(text) {
   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}
export default userSlice.reducer
