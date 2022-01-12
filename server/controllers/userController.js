/* eslint-disable prettier/prettier */
import generateToken from '../utils/generateToken.js'
import userServices from '../services/userServices.js'
import sgMail from '@sendgrid/mail'
import mongoose from 'mongoose'
import nextSequenceValue, { prevSequenceValue } from './counterController.js'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/*
    @route GET api/v2/users
    @desc Get all users list
    @access public
*/
export const getUsers = async (req, res, next) => {
   try {
      const pageSize = 10
      const page = req.query.pageNumber || 1
      const keywordSplit = req.query.keyword ? req.query.keyword.split(' ') : []
      console.log(keywordSplit, keywordSplit.length)
      if (keywordSplit.length > 1) {
         keywordSplit[1] = keywordSplit[1] ? keywordSplit[1] : ''
         keywordSplit[0] = keywordSplit[0] ? keywordSplit[0] : ''
      }
      keywordSplit[0] = keywordSplit[0] ? keywordSplit[0] : ''
      console.log(keywordSplit, keywordSplit.length)
      const keyword =
         req.query.keyword && keywordSplit.length === 2
            ? {
               firstName: {
                  $regex: `${keywordSplit[0]}|${keywordSplit[1]}`,
                  $options: 'i',
               },
               lastName: {
                  $regex: `${keywordSplit[1]}|${keywordSplit[0]}`,
                  $options: 'i',
               },
            }
            : req.query.keyword && keywordSplit.length === 1
               ? {
                  $or: [
                     {
                        firstName: {
                           $regex: `${keywordSplit[0]}`,
                           $options: 'i',
                        },
                     },
                     {
                        lastName: {
                           $regex: `${keywordSplit[0]}`,
                           $options: 'i',
                        },
                     },
                  ],
               }
               : {}
      const response = await userServices.getUsers({ ...keyword }, pageSize, page)
      if (response) {
         res.status(201).json({
            success: true,
            count: response.length,
            data: {
               users: response,
               page: page,
               pages: Math.ceil(response.length / pageSize)
            },
         })
      } else {
         res.status(401)
         throw new Error('No User found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route GET api/v2/users/:id
    @desc GET user by ID
    @access private/Admin
*/
export const getUserById = async (req, res, next) => {
   try {
      const { id } = req.params
      const response = await userServices.getUserById(id)
      if (response) {
         res.status(201).json({
            success: true,
            data: response,
         })
      } else {
         res.status(401)
         throw new Error('user not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route PUT api/v2/users/:id
    @desc Update user by its ID
    @access private/ADMIN
*/
export const updateUser = async (req, res, next) => {
   try {
      const { email, firstName, lastName, isAdmin, status } = req.body
      const user = await userServices.getUserById(req.params.id)
      if (user) {
         user.email = email || user.email
         user.firstName = firstName || user.firstName
         user.lastName = lastName || user.lastName
         user.isAdmin = isAdmin || user.isAdmin
         user.status = status || user.status

         const updatedUser = await userServices.updateUser(req.params.id, user)
         if (updatedUser) {
            res.status(201).json({
               success: true,
               data: updatedUser,
            })
         } else {
            res.status(401)
            throw new Error('User no updated')
         }
      } else {
         res.status(404)
         throw new Error('User not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route DELETE api/v2/users/:id
    @desc DELETE user by ID
    @access private/ADMIN
*/
export const deleteUser = async (req, res, next) => {
   try {
      const { id } = req.params
      const response = await userServices.deleteUser(id)
      if (response) {
         res.status(201).json({
            success: true,
            data: 'user successfully deleted',
         })
      } else {
         res.status(401)
         throw new Error('user id not valid')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route POST api/v2/users/login
    @desc to login into the account
    @access public
*/
export const loginUser = async (req, res, next) => {
   try {
      const { email, password } = req.body
      const user = await userServices.getUserByPath({ email: email })
      if (user && (await user.verifyPassword(password))) {
         res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            status: user.status,
            token: generateToken(user._id),
         })
      } else {
         res.status(401)
         throw new Error('Invalid Password')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route POST api/v2/users/
    @desc create in user account
    @access public
*/
export const registerUser = async (req, res, next) => {
   try {
      const { email, firstName, lastName, password } = req.body
      // we need to verify the email if existing should return already a user
      const existingEmail = await userServices.getUserByPath({ email: email })
      if (existingEmail) {
         res.status(401)
         throw new Error('User already registered')
      }
      const _id = await nextSequenceValue('userid')
      const newData = {
         _id: _id,
         email: email,
         firstName: firstName,
         lastName: lastName,
         password: password,
      }
      const user = await userServices.registerUser(newData)
      if (user) {
         res.status(201).json({
            success: true,
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            status: user.status,
            token: generateToken(user._id),
         })
      } else {
         await prevSequenceValue('userid')
         res.status(401)
         throw new Error(`User can't be created`)
      }
   } catch (err) {
      if (err._message === 'User validation failed') {
         await prevSequenceValue('userid')
      }
      res.status(404)
      next(err)
   }
}
/*
    @route GET api/v2/users/:id/profile
    @desc Get self user profile
    @access private
*/
export const getUserProfile = async (req, res, next) => {
   try {
      const user = await userServices.getUserById(req.params.id)
      if (user) {
         res.status(201).json({
            success: true,
            data: user,
         })
      } else {
         res.status(401)
         throw new Error('User not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route PUT api/v2/user/:id/profile
    @desc update self profile
    @access private
*/
export const updateUserProfile = async (req, res, next) => {
   try {
      const { firstName, lastName, password } = req.body
      const user = await userServices.getUserById(req.params.id)
      if (user) {
         user.firstName = firstName || user.firstName
         user.lastName = lastName || user.lastName
         if (password) {
            user.password = password
         }
         const updatedUser = await userServices.updateUser(user._id, user)
         if (updatedUser) {
            res.status(201).json({
               success: true,
               data: updatedUser,
            })
         } else {
            res.status(401)
            throw new Error('User profile not Updated')
         }
      } else {
         res.status(404)
         throw new Error('No user found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route POST api/users/recovery
    @desc to request for the password recovery
    @access public
*/
export const userRecovery = async (req, res, next) => {
   try {
      const { email } = req.body
      // const existingUser = await User.findOne({ email: email })
      const existingUser = await userServices.getUserByPath({ email: email })
      if (existingUser) {
         existingUser.generatePasswordReset()
         // const updatedUser = await User.findByIdAndUpdate(
         //    existingUser._id,
         //    existingUser,
         //    { new: true }
         // )
         const updatedUser = await userServices.updateUser(
            existingUser._id,
            existingUser
         )
         if (updatedUser) {
            let link =
               'http://' +
               req.headers.host +
               '/api/auth/reset' +
               updatedUser.resetPasswordToken
            let text = `Hi ${updatedUser.name} \n
            We received a request to reset the password for the 
            account associated with this e-mail address. \n
            Click the link below to reset your password using our secure server: \n
            ${link}`
            const mailOptions = {
               to: updatedUser.email,
               from: process.env.FROM_EMAIL,
               subject: 'password change request',
               text: text,
            }
            const mailResult = sgMail.send(mailOptions)
            if (mailResult) {
               res.status(201).json({
                  success: true,
                  message: `A reset email has been sent to ${updatedUser.email}`,
               })
            } else {
               res.status(501)
               throw new Error('Mail not sent')
            }
         } else {
            res.status(401)
            throw new Error('reset key not generated')
         }
      } else {
         res.status(401)
         throw new Error(`the email address ${email} is not associated with any account. 
         Double-check your email address and try again.`)
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route GET api/users/reset
    @desc 
    @access private
*/

export const getUserReset = async (req, res, next) => {
   try {
      // const existingUserToken = await User.findOne({
      //    resetPasswordToken: req.params.token,
      //    resetPasswordExpires: { $gt: Date.now() },
      // })
      const existingUserToken = await userServices.getUserByPath({
         resetPasswordToken: req.params.token,
         resetPasswordExpires: { $gt: Date.now() },
      })
      if (existingUserToken) {
         res.status(201).json({
            success: true,
            data: existingUserToken,
         })
      } else {
         res.status(401)
         throw new Error(`Password token invalid`)
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

/*
    @route POST api/
    @desc 
    @access public
*/

export const resetPassword = async (req, res, next) => {
   try {
      const { password } = req.body
      // const foundUser = await User.findOne({
      //    resetPasswordToken: req.params.token,
      //    resetPasswordExpires: { $gt: Date.now() },
      // })
      const foundUser = await userServices.getUserByPath({
         resetPasswordToken: req.params.token,
         resetPasswordExpires: { $gt: Date.now() },
      })
      if (foundUser) {
         foundUser.password = password
         foundUser.resetPasswordToken = undefined
         foundUser.resetPasswordExpires = undefined
         // const updatedUser = await User.findByIdAndUpdate(
         //    foundUser._id,
         //    foundUser,
         //    { new: true }
         // )
         const updatedUser = await userServices.updateUser(
            foundUser._id,
            foundUser
         )
         if (updatedUser) {
            let text = `Hi ${updatedUser.name} \n
            This is to confirm that your password has been successfully changed`
            const mailOptions = {
               to: updatedUser.email,
               from: process.env.FROM_EMAIL,
               subject: 'password change request',
               text: text,
            }
            const mailSent = sgMail.send(mailOptions)
            if (mailSent) {
               res.status(201).json({
                  success: true,
                  message: 'Your Password has been updated',
               })
            } else {
               res.status(501)
               throw new Error('mail not sent')
            }
         } else {
            res.status(401)
            throw new Error(`password not updated`)
         }
      } else {
         res.status(401)
         throw new Error('Password token invalid')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
