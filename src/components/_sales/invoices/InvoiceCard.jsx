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
      <Card sx={{ width: { xs: '50%', md: 200 }, p: 2 }}>
         <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
         >
            <Box component="div">
               <Typography
                  component="p"
                  variant="h6"
                  sx={{ fontSize: '0.8rem' }}
               >
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
               <Typography
                  component="p"
                  variant="body2"
                  sx={{ color: 'primary.darker' }}
               >
                  <Typography component="span" variant="body2">
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
