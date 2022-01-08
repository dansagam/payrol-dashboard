import { configureStore } from '@reduxjs/toolkit'
import customerReducers from '../reducers/customerSlice'
import expenseReducers from '../reducers/expenseSlice'
import userReducers from '../reducers/userSlice'
import employeeReducers from '../reducers/employeeSlice'

const store = configureStore({
   reducer: {
      customer: customerReducers,
      expense: expenseReducers,
      user: userReducers,
      employee: employeeReducers,
   },
})

export default store
