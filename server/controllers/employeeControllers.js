import Employee from '../models/employeeModel.js'

export const getEmployee = (req, res, next) => {
   try {
      const letdd = 0
      res.status(201).json({
         message: 'just testing the field',
      })
   } catch (err) {
      res.status(400)
      next(err)
   }
}
