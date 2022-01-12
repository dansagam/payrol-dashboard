import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const userAuth = async (req, res, next) => {
   try {
      let token
      if (
         req.headers.authorization &&
         req.headers.authorization.startsWith('Bearer')
      ) {
         token = req.headers.authorization.split(' ')[1]
         if (token && token.length !== 0) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            if (decoded) {
               // to get the user using the decoded id detail
               // excluding the password ans assigning to req.user
               req.user = await User.findById(decoded.id).select('-password')

               next()
            } else {
               res.status(400)
               throw new Error('Not authorised, Authorisation failed')
            }
         } else {
            res.status(401)
            throw new Error('Not authorised, Authorisation failed')
         }
      } else {
         res.status(401)
         throw new Error('Authorisation Token no provided')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

const adminAuth = async (req, res, next) => {
   try {
      // req.user as passed from userAuth
      if (req.user && req.user.isAdmin) {
         next()
      } else {
         res.status(401)
         throw new Error('Admin priviledge not found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

const userStatusAuth = async (req, res, next) => {
   try {
      if (req.user && req.user.status === 'active') {
         next()
      } else {
         res.status(401)
         throw new Error('user no more active')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}

const userAccountOwnership = async (req, res, next) => {
   try {
      const user = await User.findById(res.params.id)
      if (user) {
         if (user._id.equals(req.user._id)) {
            next()
         } else {
            res.status(401)
            throw new Error('Account not yours')
         }
      } else {
         res.status(401)
         throw new Error('Account cannot be found')
      }
   } catch (err) {
      res.status(404)
      next(err)
   }
}
export { userAuth, adminAuth, userStatusAuth, userAccountOwnership }
