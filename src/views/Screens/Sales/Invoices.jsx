// import * as React from 'react'
import Container from '@mui/material/Container'
// components
import { Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Page from '../../../components/Page'
import {
   InvoiceDisplay,
   // InvoiceCard,
   InvoiceList,
} from '../../../components/_sales/invoices'
import invoices from '../../../_mocks_/invoices'

const Invoices = () => (
   <Page title="Invoices list">
      <Container>
         <InvoiceDisplay />
         <Stack direction="row" justifyContent="space-between" sx={{ my: 2 }}>
            <InvoiceList invoices={invoices} />
            <Outlet />
         </Stack>
      </Container>
   </Page>
)

export default Invoices
