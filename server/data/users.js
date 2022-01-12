import nextSequenceValue from '../controllers/counterController.js'

const users = [
   {
      _id: 1,
      firstName: 'Adams',
      lastName: 'Mohammed',
      email: 'adams@likeyoucare.com',
      password: '12345678',
   },
   {
      _id: 2,
      firstName: 'Public',
      lastName: 'User',
      email: 'general@likeyoucare.com',
      password: '12345678',
   },
   {
      _id: 3,
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@likeyoucare.com',
      password: '12345678',
      isAdmin: true,
   },
   {
      _id: 4,
      firstName: 'Michael',
      lastName: 'James',
      email: 'mike.james@likeyoucare.com',
      password: '12345678',
   },
]

export default users
