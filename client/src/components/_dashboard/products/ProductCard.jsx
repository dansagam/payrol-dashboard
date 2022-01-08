/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
// components
import Label from '../../Label'
import ColorPreview from '../../ColorPreview'
// utils
import { fCurrency } from '../../../utils/formatNumber'

const ImgStyles = styled('img')({
   top: 0,
   width: '100%',
   height: '100%',
   objectFit: 'cover',
   position: 'absolute',
})
const ProductCard = (props) => {
   const { product } = props
   const { name, cover, price, colors, status, priceSale } = product
   return (
      <Card>
         <Box sx={{ pt: '100%', position: 'relative' }}>
            {status && (
               <Label
                  variant="filled"
                  color={(status === 'sale' && 'error') || 'info'}
                  sx={{
                     zIndex: 10,
                     top: 16,
                     right: 16,
                     position: 'absolute',
                     textTransform: 'uppercase',
                  }}
               >
                  {status}
               </Label>
            )}
            <ImgStyles src={cover} alt={name} />
         </Box>
         <Stack spacing={2} sx={{ p: 3 }}>
            <Link
               component={RouterLink}
               to="#"
               color="inherit"
               underline="hover"
            >
               <Typography variant="subtitle2" noWrap>
                  {name}
               </Typography>
            </Link>
            <Stack
               direction="row"
               alignItems="center"
               justifyContent="space-between"
            >
               <ColorPreview colors={colors} />
               <Typography variant="subtitle1">
                  <Typography
                     component="span"
                     variant="body1"
                     sx={{
                        color: 'text.disabled',
                        textDecoration: 'line-through',
                     }}
                  >
                     {priceSale && fCurrency(priceSale)}
                  </Typography>
                  &nbsp;
                  {fCurrency(price)}
               </Typography>
            </Stack>
         </Stack>
      </Card>
   )
}

ProductCard.propTypes = {
   product: PropTypes.object.isRequired,
}

export default ProductCard
