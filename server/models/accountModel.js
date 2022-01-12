import mongoose from 'mongoose'
import { roleTestFunc } from '../utils/generalUtil'

const accountSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
      accountNumber: {
         type: String,
         required: true,
      },
      accountName: {
         type: String,
         required: true,
      },
      bankName: {
         type: String,
         required: true,
         validate: {
            validator: (v) => roleTestFunc('accountbanknameid', v),
         },
      },
      employeeId: {
         type: mongoose.Schema.Types.Number,
         required: true,
         ref: 'Employee',
      },
   },
   {
      timestamps: true,
   }
)

const EmployeeAccountDetail = mongoose.model(
   'EmployeeAccountDetail',
   accountSchema
)
export default EmployeeAccountDetail
