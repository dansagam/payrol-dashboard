import * as React from 'react'
import { useFormik } from 'formik'
// material
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// components
import Page from '../../../components/Page'
import {
   // ProductCard,
   ProductFilterSidebar,
   ProductList,
   ProductSort,
} from '../../../components/_dashboard/products'
import products from '../../../_mocks_/products'

const Products = () => {
   const [openFilter, setOpenFilter] = React.useState(false)
   const formik = useFormik({
      initialValues: {
         gender: '',
         category: '',
         colors: '',
         priceRange: '',
         rating: '',
      },
      onSubmit: () => {
         'dkdkdk'
      },
   })
   const { handleSubmit, resetForm } = formik

   const handleOpenFilter = () => {
      setOpenFilter(true)
   }

   const handleCloseFilter = () => {
      setOpenFilter(false)
   }

   const handleResetFilter = () => {
      handleSubmit()
      resetForm()
   }

   return (
      <Page title="Dashboard: Products | Minimal-UI">
         <Container>
            <Typography variant="h4" sx={{ mb: 5 }}>
               Products
            </Typography>
            <Stack>
               <Stack>
                  <ProductFilterSidebar
                     formik={formik}
                     isOpenFilter={openFilter}
                     onResetFilter={handleResetFilter}
                     onOpenFilter={handleOpenFilter}
                     onCloseFilter={handleCloseFilter}
                  />
                  <ProductSort />
               </Stack>
            </Stack>
            <ProductList products={products} />
         </Container>
      </Page>
   )
}

export default Products
