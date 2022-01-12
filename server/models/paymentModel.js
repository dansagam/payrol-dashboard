import mongoose from 'mongoose'
import { roleTestFunc } from '../utils/generalUtil.js'

const paymentSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
      employeeId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Employee',
      },
      acountId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'EmployeeAccountDetail',
      },
      payrollId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Payroll',
      },
      paymentStatus: {
         type: String,
         required: true,
         // enum: ['paid', 'unpaid', 'partial'],
         validate: {
            validator: (v) => roleTestFunc('paymentpaymentstatusid', v),
         },
         default: 'unpaid',
      },
      active: {
         type: String,
         required: true,
         enum: ['active', 'inactive'],
         default: 'active',
      },
      paymentFrequency: {
         type: Number,
         required: true,
         // enum: ['weekly', 'hourly','bi-weekly', 'monthly'],
         validate: {
            validator: (v) => roleTestFunc('paymentpaymentfrequencyid', v),
         },
         default: 'monthly',
      },
      paymentDate: {
         type: Date,
         default: Date.now(),
      },
      rate: {
         type: Number,
         required: true,
         default: 0,
      },
      totalAmount: {
         type: Number,
         required: true,
         default: 0,
      },
      duration: {
         type: Number,
         required: true,
         default: 0,
      },
   },
   {
      timestamps: true,
   }
)

const Payment = mongoose.model('Payment', paymentSchema)

export default Payment
