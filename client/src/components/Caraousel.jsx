// import React from 'react'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

const Caraousel = ({ products }) => (
   <Box>
      {products.map((product) => (
         <Box key={product._id}>Image of the product</Box>
      ))}
   </Box>
)
Caraousel.propTypes = {
   products: PropTypes.array.isRequired,
}

export default Caraousel
