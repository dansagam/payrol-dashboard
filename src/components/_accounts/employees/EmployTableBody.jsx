// import * as React from 'react'
import PropTypes from 'prop-types'
// material UI
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
// import Avatar from '@mui/material/Avatar'
// import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import Stack from '@mui/material/Stack'
// components
import Label from '../../Label'
import EmployeeMenu from './EmployeeMenu'

const NameStand = (props) => {
   const { firstName, lastName } = props
   return (
      <TableCell align="left">
         <Typography variant="h4">
            {firstName} {lastName}
         </Typography>
      </TableCell>
   )
}
NameStand.propTypes = {
   firstName: PropTypes.string,
   lastName: PropTypes.string,
}
const AddressStand = (props) => {
   const { city, country } = props
   return (
      <TableCell align="left">
         <Typography variant="h4">
            {city} {country}
         </Typography>
      </TableCell>
   )
}
AddressStand.propTypes = {
   city: PropTypes.string,
   country: PropTypes.string,
}
const RoleStand = (props) => {
   const { role } = props
   return (
      <TableCell align="left">
         <Typography variant="h4">{role}</Typography>
      </TableCell>
   )
}
RoleStand.propTypes = {
   role: PropTypes.string,
}

const StatusStand = (props) => {
   const { status } = props
   return (
      <TableCell align="left">
         <Typography variant="h4">
            <Label
               variant="ghost"
               color={(status === 'inactive' && 'error') || 'success'}
            >
               {status}
            </Label>
         </Typography>
      </TableCell>
   )
}
StatusStand.propTypes = {
   status: PropTypes.string,
}
const EmployTableBody = (props) => {
   const { employee, ...other } = props
   const { status, firstName, lastName, role, city, country } = employee
   return (
      <TableRow {...other}>
         <NameStand firstName={firstName} lastName={lastName} />
         <RoleStand role={role} />
         <AddressStand city={city} country={country} />
         <StatusStand status={status} />
         <EmployeeMenu />
      </TableRow>
   )
}

EmployTableBody.propTypes = {
   employee: PropTypes.object,
}

export default EmployTableBody
