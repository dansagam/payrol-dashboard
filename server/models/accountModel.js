import mongoose from 'mongoose'

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
      },
      employeeId: {
         type: mongoose.Schema.Types.ObjectId,
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
