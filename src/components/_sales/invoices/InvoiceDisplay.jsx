import Box from '@mui/material/Box'
import InvoiceOverdue from './InvoiceOverdue'
import InvoiceDueSoon from './InvoiceDueSoon'

const InvoiceDisplay = () => (
   <Box component="div" sx={{ flex: 1, display: 'flex' }}>
      <InvoiceDueSoon />
      <InvoiceOverdue />
   </Box>
)

export default InvoiceDisplay
