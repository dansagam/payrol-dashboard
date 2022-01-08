import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
   name: 'expenses',
   initialState: {
      expenses: [],
   },
})

export default expenseSlice.reducer
