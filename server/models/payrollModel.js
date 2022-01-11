import mongoose from 'mongoose'

const payrollSchema = new mongoose.Schema(
   {
      employeeId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Employee',
      },
      accountId: {
         type: mongoose.Schema.Types.ObjectId,
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
         default: 0,
      },
      periodMode: {
         type: String,
         required: true,
         enum: ['monthly', 'weekly', 'bi-weekly', 'hourly'],
         default: 'monthly',
      },
      Rate: {
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
         enum: ['pending', 'active', 'inactive', 'finalised', 'close'],
         default: 'pending',
      },
      paymentStatus: {
         type: String,
         required: true,
         enum: ['paid', 'unpaid', 'partial'],
         default: 'unpaid',
      },
   },
   {
      timestamps: true,
   }
)

const Payroll = mongoose.model('Payroll', payrollSchema)
export default Payroll
