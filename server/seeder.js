import Counter from './models/counterModel.js'
import connectDB from './db/connectDB.js'
import { config } from 'dotenv'
import counter from './data/counter.js'
import User from './models/userModel.js'
import users from './data/users.js'
import Role from './models/roleModel.js'
import Employee from './models/employeeModel.js'
import employee from './data/employees.js'
import EmployeeAccountDetail from './models/accountModel.js'
import Customer from './models/customerModel.js'
import account from './data/account.js'
import customers from './data/customers.js'
import Payroll from './models/payrollModel.js'
import Payment from './models/paymentModel.js'
import role from './data/role.js'
config()
connectDB()
const importData = async () => {
   try {
      await Promise.all([
         Counter.insertMany(counter),
         Role.insertMany(role),
         User.insertMany(users),
         Employee.insertMany(employee),
         Customer.insertMany(customers),
         EmployeeAccountDetail.insertMany(account),
      ])
      console.log('data imported')
      process.exit()
   } catch (err) {
      console.error(`${err} exists`)
      process.exit(1)
   }
}
const destroyData = async () => {
   try {
      await Promise.all([
         Counter.deleteMany(),
         User.deleteMany(),
         Payroll.deleteMany(),
         Payment.deleteMany(),
         User.deleteMany(),
         Employee.deleteMany(),
         Customer.deleteMany(),
         EmployeeAccountDetail.deleteMany(),
         Role.deleteMany(),
      ])
      console.log('Data destroyed')
      process.exit()
   } catch (err) {
      console.log(err)
      process.exit(1)
   }
}

if (process.argv[2] === '-d') {
   destroyData()
} else {
   importData()
}
