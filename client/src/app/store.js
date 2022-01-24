import { configureStore } from '@reduxjs/toolkit'
import customerReducers from '../reducers/customerSlice'
import expenseReducers from '../reducers/expenseSlice'
import userReducers from '../reducers/userSlice'
import employeeReducers from '../reducers/employeeSlice'

const store = configureStore({
   reducer: {
      Customer: customerReducers,
      Expense: expenseReducers,
      User: userReducers,
      Employee: employeeReducers,
   },
})

export default store
