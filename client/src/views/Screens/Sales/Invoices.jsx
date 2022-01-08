// import * as React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
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
         <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
            <InvoiceDisplay />
            <Stack
               direction="row"
               justifyContent="space-between"
               sx={{ my: 2 }}
            >
               <InvoiceList invoices={invoices} />
               <Outlet />
            </Stack>
         </Paper>
         <Paper sx={{ display: { sm: 'none', xs: 'block' } }}>
            <InvoiceDisplay />
            <Stack
               direction="row"
               justifyContent="space-between"
               sx={{ my: 2 }}
            >
               <InvoiceList invoices={invoices} />
               <Outlet />
            </Stack>
         </Paper>
      </Container>
   </Page>
)

export default Invoices
