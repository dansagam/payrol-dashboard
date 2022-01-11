import mongoose from 'mongoose'
import {
   phoneTestFunc,
   emailTestFunc,
   roleTestFunc,
} from '../utils/generalUtil.js'

const contactSchema = new mongoose.Schema({
   mobileNumber: {
      type: String,
      validate: {
         validator: (v) => phoneTestFunc(v),
         message: (props) => `${props.value} is not a valid phone number`,
      },
      required: true,
   },
   secPhoneNumber: {
      type: String,
      validate: {
         validator: (v) => {
            if (v === null) return true
            phoneTestFunc(v)
         },
         message: (props) => `${props.value} is not a valid phone number`,
      },
   },
})
const addressSchema = new mongoose.Schema({
   country: {
      type: String,
      // required: true,
   },
   line: {
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
   originalHireDate: { type: Date, default: Date.now },
   active: { type: Boolean, default: true },
})
const EmployeeSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
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
         enum: ['Mr', 'Mrs', 'Miss', 'Ms', 'Engr'],
         default: 'Mr',
      },
      suffix: {
         type: String,
      },
      primaryEmail: {
         type: String,
         validate: {
            validator: (v) => {
               if (v === null) return true
               emailTestFunc(v)
            },
            message: 'not a valid email',
         },
      },
      personalEmail: {
         type: String,
         validate: {
            validator: (v) => {
               if (v === null) return true
               emailTestFunc(v)
            },
            message: 'not a valid email',
         },
      },
      salaryAmount: {
         type: Number,
         required: true,
         default: 0,
      },
      salaryMode: {
         type: String,
         required: true,
         enum: ['monthly', 'weekly', 'bi-weekly', 'hourly'],
         default: 'monthly',
      },
      contact: contactSchema,
      address: addressSchema,
      role: {
         type: String,
         required: true,
         validate: {
            validator: (v) => roleTestFunc('employeerole', v),
         },
         default: 'general',
         // enum: [
         //    'engineering',
         //    'account',
         //    'customer care',
         //    'management',
         //    'general',
         // ],
      },
      dob: {
         type: Date,
         required: true,
         default: Date.now(),
      },
      // account_id: {
      //    type: mongoose.Schema.Types.ObjectId,
      //    ref: 'EmployeeAccountDetail',
      // },
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
