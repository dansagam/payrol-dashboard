import { config } from 'dotenv'
import app from './app.js'

config({ silent: true })
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
   console.log(
      `server running in  ${process.env.NODE_ENV} mode on port ${PORT} 🔥 !`
   )
)
