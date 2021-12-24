import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'

const InvoiceItem = ({ children }) => <Grid container>{children}</Grid>
InvoiceItem.propTypes = {
   children: PropTypes.node,
}

export default InvoiceItem
