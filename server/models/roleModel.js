import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema(
   {
      _id: {
         type: String,
         required: true,
      },
      role: {
         type: Array,
         required: true,
      },
   },
   {
      timestamps: true,
   }
)

const Role = mongoose.model('Role', roleSchema)
export default Role
