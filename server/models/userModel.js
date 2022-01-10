import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import nextSequenceValue from '../controllers/counterController.js'

const userSchema = new mongoose.Schema(
   {
      _id: {
         type: Number,
         required: true,
      },
      firstName: {
         type: String,
         required: true,
      },
      lastName: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      password: {
         type: String,
         required: true,
      },
      isAdmin: {
         type: Boolean,
         required: true,
         default: false,
      },
      status: {
         type: String,
         enum: ['active', 'inactive'],
         required: true,
         default: 'active',
      },
      resetPasswordToken: {
         type: String,
         required: false,
      },
      resetPasswordExpires: {
         type: Date,
         required: false,
      },
   },
   {
      timestamps: true,
   }
)

userSchema.methods.verifyPassword = async function (enteredPassword) {
   return bcrypt.compare(enteredPassword, this.password)
}
userSchema.pre('save', async function (next) {
   try {
      // const chcee = await nextSequenceValue('userid')
      // console.log(chcee)
      if (!this.isModified('password')) return next()
      const rounds = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, rounds)
      // this._id = await nextSequenceValue('userid')
   } catch (err) {
      return next()
   }
})

userSchema.methods.generatePasswordReset = async function () {
   this.resetPasswordToken = crypto.randomBytes(20).toString('hex')
   this.resetPasswordExpires = Date.now() + 360000
}

const User = mongoose.model('User', userSchema)

export default User
