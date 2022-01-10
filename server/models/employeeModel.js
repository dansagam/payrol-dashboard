import mongoose from 'mongoose'
import { phoneTestFunc, emailTestFunc } from '../utils/generalUtil'

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
   },
   {
      timestamps: true,
   }
)
const addressSchema = new mongoose.Schema({
   country: {
      type: String,
      required: true,
   },
   line1: {
      type: String,
      required: true,
   },
   city: {
      type: String,
   },
   state: {
      type: String,
   },
   zipCode: {
      type: String,
   },
})
const workerStatusSchema = new mongoose.Schema({
   lastHireDate: { type: Date },
   originalHireDate: { type: Date },
   active: { type: Boolean },
})
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
      primaryEmail: {
         type: String,
      },
      personalEmail: {
         type: String,
         validate: {
            validator: emailTestFunc(v),
            message: 'not a valid email',
         },
      },
      contact: contactSchema,
      address: addressSchema,
      // a_address: [
      //    {
      //       type: mongoose.Schema.Types.ObjectId,
      //       ref: 'Address',
      //    },
      // ],
      dob: {
         type: Date,
         required: true,
      },
      account_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'EmployeeAccount',
      },
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
      },
      workerStatus: workerStatusSchema,
   },
   {
      timestamps: true,
   }
)

const Employee = mongoose.model('Employee', EmployeeSchema)
export default Employee
