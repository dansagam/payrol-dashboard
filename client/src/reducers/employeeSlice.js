import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
   name: 'employees',
   initialState: {
      employees: [],
   },
})

export default employeeSlice.reducer
