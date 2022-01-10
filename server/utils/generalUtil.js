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
   if (String(email).toLowerCase().match(emailMatch)) {
      return true
   } else return false
}
