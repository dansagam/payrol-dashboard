import * as React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import InvoiceCard from './InvoiceCard'
import PaginationContainer from '../../Pagination'

const InvoiceList = ({ invoices, ...other }) => {
   const [page, setPage] = React.useState(0)
   const [rowsPerPage, setRowsPerPage] = React.useState(4)
   const pages = Math.floor(invoices.length / rowsPerPage)
   const handleChangePage = (e, newPage) => {
      setPage(newPage)
   }
   // eslint-disable-next-line no-unused-vars
   const handleChangeRowsPerPage = () => {
      setRowsPerPage(parseInt(e.target.value, 10))
      setPage(0)
   }
   return (
      <Grid container {...other}>
         {invoices
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((invoice) => (
               <Grid key={invoice._id} item xs={12}>
                  <InvoiceCard invoice={invoice} />
               </Grid>
            ))}
         <Grid item xs={12}>
            <PaginationContainer
               pages={pages}
               page={page}
               handlePageChange={handleChangePage}
            />
         </Grid>
      </Grid>
   )
}

InvoiceList.propTypes = {
   invoices: PropTypes.array.isRequired,
}
export default InvoiceList
