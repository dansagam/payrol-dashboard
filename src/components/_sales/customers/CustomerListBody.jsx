import PropTypes from 'prop-types'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Label from '../../Label'

const CustomerListBody = (props) => {
   const { customer, handleClick, selected } = props
   const { _id, name, address, phoneNumber, activeStatus, city, country } =
      customer
   const isCustomerSelected = selected.indexOf(name) !== -1
   return (
      <TableRow
         key={_id}
         role="checkbox"
         tabIndex={-1}
         hover
         selected={isCustomerSelected}
         aria-checked={isCustomerSelected}
      >
         <TableCell>
            <Checkbox
               checked={isCustomerSelected}
               onChange={(e) => handleClick(e, name)}
            />
         </TableCell>
         <TableCell component="th" scope="row" padding="none">
            <Typography variant="body2">{name}</Typography>
         </TableCell>
         <TableCell align="left">
            <Typography variant="body2">{address}</Typography>
         </TableCell>
         <TableCell align="left">
            <Typography variant="body2">{phoneNumber}</Typography>
         </TableCell>
         <TableCell align="left">{city}</TableCell>
         <TableCell align="left">{country}</TableCell>
         <TableCell align="left">
            <Label
               variant="ghost"
               color={(activeStatus === 'inactive' && 'error') || 'success'}
            >
               {activeStatus === 'active' ? 'A' : 'I'}
            </Label>
         </TableCell>
         <TableCell align="left" sx={{ color: 'secondary.darker' }}>
            <FontAwesomeIcon icon={faEdit} />
         </TableCell>
      </TableRow>
   )
}

CustomerListBody.propTypes = {
   customer: PropTypes.object.isRequired,
   handleClick: PropTypes.func,
   selected: PropTypes.array,
}
export default CustomerListBody
