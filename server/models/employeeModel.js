import mongoose from 'mongoose'
import { phoneTestFunc } from '../utils/generalUtil'

const contactSchema = new mongoose.Schema(
   {
      mobileNumber: {
         type: String,
         validate: {
            validator: phoneTestFunc(v),
            message: (props) => `${props.value} is not a valid phone number`,
         },
         required: true,
      },
      a_phoneNumber: {
         type: String,
      },
      email: {
         type: String,
      },
   },
   {
      timestamps: true,
   }
)
const EmployeeSchema = new mongoose.Schema(
   {
      avatar: {
         type: String,
      },
      firstName: {
         type: String,
         required: [true, 'First Name Required'],
      },
      lastName: {
         type: String,
         required: [true, 'Last Name Require'],
      },
      middleName: {
         type: String,
      },
      prefix: {
         type: String,
         required: [true, 'Prefix is required'],
         default: 'Mr',
      },
      suffix: {
         type: String,
      },
      contact: contactSchema,
      address: {
         type: String,
         required: true,
      },
      a_address: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address',
         },
      ],
      dob: {
         type: Date,
         required: true,
      },
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
      },
   },
   {
      timestamps: true,
   }
)

const Employee = mongoose.model('Employee', EmployeeSchema)
export default Employee
