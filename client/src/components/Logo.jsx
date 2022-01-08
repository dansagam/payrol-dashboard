import PropTypes from 'prop-types'
import Box from '@mui/material/Box'

const Logo = ({ src, sx }) => (
   <Box component="img" src={src} sx={{ width: 40, height: 40, ...sx }} />
)

Logo.propTypes = {
   sx: PropTypes.object,
   src: PropTypes.string,
}

export default Logo
