import nextSequenceValue from '../controllers/counterController.js'
import bcrypt from 'bcrypt'

const users = [
   {
      _id: 1,
      firstName: 'Adams',
      lastName: 'Mohammed',
      email: 'adams@likeyoucare.com',
      password: bcrypt.hashSync('12345678', 10),
   },
   {
      _id: 2,
      firstName: 'Public',
      lastName: 'User',
      email: 'general@likeyoucare.com',
      password: bcrypt.hashSync('12345678', 10),
   },
   {
      _id: 3,
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@likeyoucare.com',
      password: bcrypt.hashSync('12345678', 10),
      isAdmin: true,
   },
   {
      _id: 4,
      firstName: 'Michael',
      lastName: 'James',
      email: 'mike.james@likeyoucare.com',
      password: bcrypt.hashSync('12345678', 10),
   },
]

export default users
