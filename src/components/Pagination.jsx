import React from 'react'
import PropTypes from 'prop-types'
// import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
// import { Link as RouterLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const PaginationContainer = ({ pages }) => {
   const [page, setPage] = React.useState(1)
   const handleChange = (e, value) => {
      setPage(value)
   }
   return (
      pages > 1 && (
         <Pagination
            count={pages}
            renderItem={(item) => (
               <PaginationItem
                  components={{
                     previous: ArrowBackIcon,
                     next: ArrowForwardIcon,
                  }}
                  {...item}
               />
            )}
            page={page}
            onChange={handleChange}
         />
      )
   )
}
PaginationContainer.propTypes = {
   pages: PropTypes.number,
}

export default PaginationContainer

// {
//    ;[...Array(pages).keys()].map((x) => (
//       <Box key={x + 1} component={RouterLink} to="#">
//          <PaginationItem>{x + 1}</PaginationItem>
//       </Box>
//    ))
// }
