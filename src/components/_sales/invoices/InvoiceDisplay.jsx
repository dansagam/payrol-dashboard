import Box from '@mui/material/Box'
import InvoiceOverdue from './InvoiceOverdue'
import InvoiceDueSoon from './InvoiceDueSoon'
import invoices from '../../../_mocks_/invoices'
import { fNumber } from '../../../utils/formatNumber'

const dueSoonwtout = invoices
   .filter(
      (invoice) =>
         invoice.dueStatus === 'due in some days' ||
         invoice.dueStatus === 'due Today'
   )
   .reduce((prev, curr) => curr.invoiceAmount + prev, 0)
const overduewtout = invoices
   .filter((invoice) => invoice.dueStatus === 'overdue')
   .reduce((prev, curr) => curr.invoiceAmount + prev, 0)

const dueSoonAmount = fNumber(dueSoonwtout)

const overdueAmount = fNumber(overduewtout)
// console.log(dueSoonAmount)
const fraction = dueSoonwtout / (dueSoonwtout + overduewtout)
const InvoiceDisplay = () => (
   <Box component="div" sx={{ flex: 1, display: 'flex', width: '100%' }}>
      <InvoiceDueSoon
         dueSoonAmount={dueSoonAmount}
         dueSoonFraction={fraction}
      />
      <InvoiceOverdue
         overdueAmount={overdueAmount}
         overdueFraction={1 - fraction}
      />
   </Box>
)

export default InvoiceDisplay
