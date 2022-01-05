// import * as React from 'react'
import PropTypes from 'prop-types'
import { visuallyHidden } from '@mui/utils'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Box from '@mui/material/Box'
import TableSortLabel from '@mui/material/TableSortLabel'

const PayrollHead = (props) => {
   const { headLabel, order, orderBy, onRequestSort } = props
   const createSortHandler = (property) => (event) => {
      onRequestSort(event, property)
   }
   return (
      <TableHead>
         <TableRow>
            {headLabel.map((item) => (
               <TableCell
                  key={item._id}
                  align="right"
                  sortDirection={orderBy === item._id ? order : false}
                  padding={item.disablePadding ? 'none' : 'normal'}
               >
                  <TableSortLabel
                     hideSortIcon
                     active={orderBy === item._id}
                     direction={orderBy === item._id ? order : 'asc'}
                     onClick={createSortHandler(item._id)}
                  >
                     {item.label}
                     {orderBy === item._id ? (
                        <Box component="span" sx={visuallyHidden}>
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

PayrollHead.propTypes = {
   headLabel: PropTypes.array.isRequired,
   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
   orderBy: PropTypes.string.isRequired,
   onRequestSort: PropTypes.func.isRequired,
}

export default PayrollHead
