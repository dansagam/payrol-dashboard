import PropTypes from 'prop-types'
// material
import Grid from '@mui/material/Grid'
// components
import ProductCard from './ProductCard'

const ProductList = ({ products, ...other }) => (
   <Grid container spacing={3} {...other}>
      {products.map((product) => (
         <Grid key={product._id} item xs={12} sm={6} md={3}>
            <ProductCard product={product} />
         </Grid>
      ))}
   </Grid>
)
ProductList.propTypes = {
   products: PropTypes.array.isRequired,
}

export default ProductList
