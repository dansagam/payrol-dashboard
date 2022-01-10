import Counter from './models/counterModel.js'
import connectDB from './db/connectDB.js'
import { config } from 'dotenv'
import counter from './data/counter.js'
import User from './models/userModel.js'
import users from './data/users.js'

config()
connectDB()

const importData = async () => {
   try {
      // await Promise.all([Counter.insertMany(counter), User.insertMany(users)])
      // await Counter.insertMany(counter)
      // await nextSequenceValue('userid')
      await User.insertMany(users)
      console.log('data imported')
      process.exit()
   } catch (err) {
      console.error(`${err} exists`)
      process.exit(1)
   }
}
const destroyData = async () => {
   try {
      await Promise.all([Counter.deleteMany(), User.deleteMany()])
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
