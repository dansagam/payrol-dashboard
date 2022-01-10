import mongoose from 'mongoose'

const counterSchema = new mongoose.Schema(
   {
      _id: {
         type: String,
         required: true,
      },
      sequence_value: {
         type: Number,
      },
   },
   {
      timestamps: true,
   }
)

const Counter = mongoose.model('Counter', counterSchema)
export default Counter
