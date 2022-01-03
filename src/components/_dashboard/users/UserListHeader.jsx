import PropTypes from 'prop-types'
import { visuallyHidden } from '@mui/utils'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import TableSortLabel from '@mui/material/TableSortLabel'

const UserListHeader = (props) => {
   const {
      order,
      orderBy,
      rowCount,
      headLabel,
      numSelected,
      onRequestSort,
      onSelectAllClick,
   } = props
   const createSortHandler = (property) => (event) => {
      onRequestSort(event, property)
   }
   return (
      <TableHead>
         <TableRow>
            <TableCell>
               <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={numSelected > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
               />
            </TableCell>
            {headLabel.map((headCell) => (
               <TableCell
                  key={headCell._id}
                  align={headCell.alignRight ? 'right' : 'left'}
                  sortDirection={orderBy === headCell._id ? order : false}
                  onClick={() => createSortHandler(headCell._id)}
               >
                  <TableSortLabel
                     hideSortIcon
                     active={orderBy === headCell._id}
                     direction={orderBy === headCell._id ? order : 'asc'}
                  >
                     {headCell.label}
                     {orderBy === headCell._id ? (
                        <Box sx={{ ...visuallyHidden }}>
                           {order === 'desc'
                              ? 'sorted descending'
                              : 'sorted ascending'}
                        </Box>
                     ) : null}
                  </TableSortLabel>
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   )
}
UserListHeader.propTypes = {
   order: PropTypes.oneOf(['asc', 'desc']),
   orderBy: PropTypes.string,
   rowCount: PropTypes.number,
   headLabel: PropTypes.array,
   numSelected: PropTypes.number,
   onRequestSort: PropTypes.func,
   onSelectAllClick: PropTypes.func,
}
export default UserListHeader
