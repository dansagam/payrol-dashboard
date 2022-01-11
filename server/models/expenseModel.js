import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      amount: {
         type: Number,
         required: true,
      },
   },
   {
      timestamps: true,
   }
)

const Expense = mongoose.model('Expense', expenseSchema)
export default Expense
