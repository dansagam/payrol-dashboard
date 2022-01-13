import { createSlice } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem('userInfo')
   ? JSON.parse(localStorage.getItem('userInfo'))
   : null
export const userSlice = createSlice({
   name: 'user',
   initialState: {
      users: [],
      user: {},
      userLogin: {
         userInfo: userInfoFromStorage,
      },
      error: {
         msg: '',
         status: undefined,
         id: null,
      },
   },
})

export default userSlice.reducer
