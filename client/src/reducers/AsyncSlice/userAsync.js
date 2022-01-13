import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getUserByIdFunc,
   getUserFunc,
   getUserProfileFunc,
   // getUserResetFunc,
   loginFunc,
   registerFunc,
   deleteUserFunc,
   deleteUserSelfFunc,
} from '../../sliceFunction/userAsyncFunc'

export const getUsers = createAsyncThunk(
   'user/getUsers',
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
         const response = await getUserFunc({ keyword, pageNumber }, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const getUserById = createAsyncThunk(
   'user/getUserById',
   async ({ _id }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await getUserByIdFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const getUserProfile = createAsyncThunk(
   'user/getUserByProfile',
   async ({ _id }, { getState, rejectWithValue }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await getUserProfileFunc(_id, config)
         return response.data
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const loginUser = createAsyncThunk(
   'user/loginUser',
   async (newProps, { rejectWithValue }) => {
      try {
         const { email, password } = newProps
         const config = {
            headers: {
               'Content-Types': 'application/json',
            },
         }
         const newData = {
            email,
            password,
         }
         const response = await loginFunc(newData, config)
         localStorage.setItem('userInfo', JSON.stringify(response))
         return response
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const registerUser = createAsyncThunk(
   'user/registerUser',
   async (newData, { rejectWithValue }) => {
      try {
         const { firstName, lastName, email, password } = newData
         const config = {
            headers: {
               'Content-Types': 'application/json',
            },
         }
         const newData1 = {
            firstName,
            lastName,
            email,
            password,
         }
         const response = await registerFunc(newData1, config)
         localStorage.setItem('userInfo', JSON.stringify(response))
         return response
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)

export const deleteUser = createAsyncThunk(
   'user/deleteUser',
   async ({ _id }, { getState, rejectWithValue }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await deleteUserFunc(_id, config)
         return response
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
export const deleteUserSelf = createAsyncThunk(
   'user/deleteUser',
   async ({ _id }, { getState, rejectWithValue }) => {
      try {
         const {
            userLogin: { userInfo },
         } = getState().User
         const config = {
            headers: {
               Authorization: `Bearer ${userInfo.token}`,
            },
         }
         const response = await deleteUserSelfFunc(_id, config)
         return response
      } catch (err) {
         throw rejectWithValue(err.response)
      }
   }
)
