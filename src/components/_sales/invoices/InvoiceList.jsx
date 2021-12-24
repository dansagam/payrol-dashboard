import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import InvoiceCard from './InvoiceCard'

const InvoiceList = ({ invoices, ...other }) => (
   <Grid container {...other}>
      {invoices.map((invoice) => (
         <Grid key={invoice._id} item xs={12}>
            <InvoiceCard invoice={invoice} />
         </Grid>
      ))}
   </Grid>
)

InvoiceList.propTypes = {
   invoices: PropTypes.array.isRequired,
}
export default InvoiceList
