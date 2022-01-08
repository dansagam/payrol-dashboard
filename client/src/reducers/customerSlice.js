import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
   name: 'customers',
   initialState: {
      customers: [],
   },
})

export default customerSlice.reducer
