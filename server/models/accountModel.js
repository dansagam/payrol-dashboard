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
   },
   {
      timestamps: true,
   }
)

const EmployeeAccount = mongoose.model('EmployeeAccount', accountSchema)
export default EmployeeAccount
