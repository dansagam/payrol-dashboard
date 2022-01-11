import mongoose from 'mongoose'

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
         enum: ['paid', 'unpaid', 'partial'],
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
         enum: ['weekly', 'hourly', 'monthly'],
         default: 'monthly',
      },
      paymentDate: {
         type: Date,
      },
   },
   {
      timestamps: true,
   }
)

const Payment = mongoose.model('Payment', paymentSchema)

export default Payment
