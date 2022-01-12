import Role from '../models/roleModel.js'

import { format, formatDistanceToNow } from 'date-fns'

export const phoneTestFunc = (inputTxt) => {
   // let phoneMatch = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
   // const phoneMatch = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
   // const phoneMatch = /^\+?([0-9]?)\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
   // const phoneMatch = /^\+?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
   // const phoneMatch = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
   const phoneMatch = /^([+]{1})([0-9]{1,3})-([0-9]{3})-([0-9]{3})-([0-9]{4})$/
   if (inputTxt.match(phoneMatch)) {
      return true
   } else return false
}
// let gud =
//    /^([+]{1})\(?([0-9]{1,3})\)?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// let gud = /^([+]{1})([0-9]{1,3})-([0-9]{3})-([0-9]{3})-([0-9]{4})$/

export const emailTestFunc = (inputValue) => {
   // const emailMatch =
   //    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   const emailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   // const emailMatch = /^[a-z0-9\-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/i
   if (String(inputValue).toLowerCase().match(emailMatch)) {
      return true
   } else return false
}

export const roleTestFunc = async (id, inputTxt) => {
   const result = await Role.findById(id)
   if (result) {
      const role = result.role
      if (role.includes(inputTxt)) {
         return true
      } else return false
   } else {
      return false
   }
}
// ----------------------------------------------------------------------

export function fDate(date) {
   return format(new Date(date), 'dd MMMM yyyy')
}

export function fDateTime(date) {
   return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export function fDateTimeSuffix(date) {
   return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}
export function fDateDB(date) {
   return format(new Date(date), 'yyyy-MM-dd')
}

export function fToNow(date) {
   return formatDistanceToNow(new Date(date), {
      addSuffix: true,
   })
}

export function durationCalc(durationMode, start, end) {
   const stTm = new Date(start).getTime()
   const enTm = new Date(end).getTime()
   if (durationMode === 'monthly' || durationMode === 'weekly') {
      return Math.floor((enTm - stTm) / (1000 * 3600 * 24))
   } else if (durationMode === 'hourly') {
      return Math.floor((enTm - stTm) / (1000 * 3600))
   }
   return
}
