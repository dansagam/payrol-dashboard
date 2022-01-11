import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import userRoute from './routes/userRoute.js'
import connectDB from './db/connectDB.js'
import employeeRoute from './routes/employeeRoute.js'

config()
connectDB()
const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use('/api/v2/users', userRoute)
app.use('/api/v2/employees', employeeRoute)
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'))
}
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/client/build')))

   app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
   )
} else {
   app.get('/', (req, res) => {
      res.send('API is running')
   })
}

app.use(notFound)
app.use(errorHandler)

export default app
