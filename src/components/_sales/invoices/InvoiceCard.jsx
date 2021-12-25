/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '@mui/material/Card'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const InvoiceCard = ({ invoice }) => {
   const { customerName, invoiceRef, invoiceAmount, dueStatus } = invoice
   return (
      <Card>
         <Stack
            direction="row"
            alignItem="center"
            justifyContent="space-between"
         >
            <Box component="div">
               <Typography component="p" variant="h2">
                  {customerName}
               </Typography>
               <Link
                  to="#"
                  color="inherit"
                  underline="hover"
                  component={RouterLink}
               >
                  <Typography component="h2" variant="body2">
                     {invoiceRef}
                  </Typography>
               </Link>
            </Box>
            <Box component="div">
               <Typography component="p" variant="h2">
                  <Typography component="span" variant="h2">
                     $
                  </Typography>
                  {invoiceAmount}
               </Typography>
               <Typography component="h2" variant="body2">
                  {dueStatus}
               </Typography>
            </Box>
         </Stack>
      </Card>
   )
}

InvoiceCard.propTypes = {
   invoice: PropTypes.object,
}

export default InvoiceCard
