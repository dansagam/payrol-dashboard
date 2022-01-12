import mongoose from 'mongoose'
import {
   phoneTestFunc,
   emailTestFunc,
   roleTestFunc,
} from '../utils/generalUtil.js'

const addressSchema = new mongoose.Schema({
   country: {
      type: String,
      required: true,
      default: 'Nigeria',
   },
   line: {
      type: String,
      required: true,
   },
   city: {
      type: String,
      default: 'Lagos',
   },
   state: {
      type: String,
      default: 'Lagos',
   },
   zipCode: {
      type: String,
      default: '110011',
   },
})
const contactSchema = new mongoose.Schema(
   {
      primaryContact: {
         type: String,
         validate: {
            validator: (v) => phoneTestFunc(v),
            message: (props) => `${props.value} is not a valid phone number`,
         },
         required: true,
      },
      secondaryContact: {
         type: String,
         validate: {
            validator: (v) => phoneTestFunc(v),
            message: (props) => `${props.value} is not a valid phone number`,
         },
      },
   },
   {
      timestamps: true,
   }
)
const emailSchema = new mongoose.Schema({
   primaryEmail: {
      type: String,
      required: true,
      validate: {
         validator: (v) => emailTestFunc(v),
         message: 'not a valid email',
      },
   },
})
const customerSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      address: addressSchema,
      status: {
         type: String,
         required: true,
         // enum: ['active', 'inactive', 'suspended'],
         validate: {
            validator: (v) => roleTestFunc('customerstatusid', v),
         },
         default: 'active',
      },
      contactNumber: contactSchema,
      contactEmail: emailSchema,
   },
   {
      timestamps: true,
   }
)

const Customer = mongoose.model('Customer', customerSchema)

export default Customer
