import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import PropTypes from 'prop-types'
import TableSortLabel from '@mui/material/TableSortLabel'

const CustomerListHeader = (props) => {
   const {
      headLabel,
      onRequestSort,
      order,
      orderBy,
      rowCount,
      numSelected,
      onSelectAllClick,
   } = props
   const createSortHandler = (property) => (e) => {
      onRequestSort(e, property)
   }
   return (
      <TableHead>
         <TableRow>
            <TableCell>
               <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onClick={onSelectAllClick}
               />
            </TableCell>
            {headLabel.map((headCell) => (
               <TableCell
                  key={headCell._id}
                  align={headCell.alignRight ? 'right' : 'left'}
                  sortDirection={orderBy === headCell._id ? order : false}
               >
                  <TableSortLabel
                     hideSortIcon
                     active={orderBy === headCell._id}
                     direction={orderBy === headCell._id ? order : 'asc'}
                     onClick={createSortHandler(headCell._id)}
                  >
                     {headCell.label}
                     {orderBy === headCell._id ? (
                        <Box>
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
CustomerListHeader.propTypes = {
   order: PropTypes.oneOf(['asc', 'desc']),
   orderBy: PropTypes.string,
   rowCount: PropTypes.number,
   headLabel: PropTypes.array,
   numSelected: PropTypes.number,
   onRequestSort: PropTypes.func,
   onSelectAllClick: PropTypes.func,
}

export default CustomerListHeader
