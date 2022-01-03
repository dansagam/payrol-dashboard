import PropTypes from 'prop-types'
// materials
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import Avatar from '@mui/material/Avatar'
// components
import Label from '../../Label'
import UserListMenu from './UserListMenu'

const UserListBody = (props) => {
   const { user, selected, handleClick } = props
   const { name, role, status, company, /** avatarUrl, */ isVerified } = user
   const isCustomerSelected = selected.indexOf(name) !== -1
   return (
      <TableRow
         hover
         tabIndex={-1}
         role="checkbox"
         selected={isCustomerSelected}
         aria-checked={isCustomerSelected}
      >
         <TableCell padding="checkbox">
            <Checkbox
               checked={isCustomerSelected}
               onChange={(e) => handleClick(e, name)}
            />
         </TableCell>
         <TableCell>
            <Stack>
               {/* <Avatar alt={name} src={avatarUrl} /> */}
               <Typography variant="subtitle2" noWrap>
                  {name}
               </Typography>
            </Stack>
         </TableCell>
         <TableCell align="left">{company}</TableCell>
         <TableCell align="left">{role}</TableCell>
         <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
         <TableCell align="left">
            <Label
               variant="ghost"
               color={(status === 'banned' && 'error') || 'success'}
            >
               {sentenceCase(status)}
            </Label>
         </TableCell>
         <TableCell align="right">
            <UserListMenu />
         </TableCell>
      </TableRow>
   )
}

UserListBody.propTypes = {
   // numSelected: PropTypes.number,
   user: PropTypes.object,
   selected: PropTypes.array,
   handleClick: PropTypes.func,
}

export default UserListBody
