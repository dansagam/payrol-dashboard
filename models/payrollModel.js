import mongoose from 'mongoose'
import { roleTestFunc } from '../utils/generalUtil.js'

const payrollSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
      employeeId: {
         type: mongoose.Schema.Types.Number,
         required: true,
         ref: 'Employee',
      },
      accountId: {
         type: mongoose.Schema.Types.Number,
         ref: 'EmployeeAccountDetail',
      },
      periodStartAt: {
         type: Date,
         required: true,
         default: Date.now,
      },
      periodEndAt: {
         type: Date,
         default: Date.now,
      },
      periodDuration: {
         type: Number,
         required: true,
         default: 1,
      },
      periodMode: {
         type: String,
         required: true,
         // enum: ['monthly', 'weekly', 'bi-weekly', 'hourly'],
         validate: {
            validator: (v) => roleTestFunc('payrollperiodmodeid', v),
         },
         default: 'monthly',
      },
      rate: {
         type: Number,
         required: true,
         default: 0,
      },
      tax: {
         type: Number,
         required: true,
         default: 0,
      },
      status: {
         type: String,
         required: true,
         // enum: ['pending', 'active', 'inactive', 'finalised', 'close'],
         validate: {
            validator: (v) => roleTestFunc('payrollstatusid', v),
         },
         default: 'pending',
      },
      paymentStatus: {
         type: String,
         required: true,
         enum: ['paid', 'unpaid', 'partial'],
         validate: {
            validator: (v) => roleTestFunc('payrollpaymentstatusid', v),
         },
         default: 'unpaid',
      },
   },
   {
      timestamps: true,
   }
)

const Payroll = mongoose.model('Payroll', payrollSchema)
export default Payroll
