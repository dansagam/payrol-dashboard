/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'
// material
import { alpha, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const RootStyles = styled(Box)({
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
})

const IconStyles = styled('div')(({ theme }) => ({
   marginLeft: -4,
   borderRadius: '50%',
   width: theme.spacing(2),
   height: theme.spacing(2),
   border: ` 2px solid ${theme.palette.background.paper}`,
   boxShadow: `inset -1px 1px 2px ${alpha(theme.palette.common.black, 0.24)}`,
}))
const ColorPreview = (props) => {
   const { colors = [], limit = 3, ...other } = props
   const showColor = colors.slice(0, limit)
   const moreColor = colors.length - limit
   return (
      <RootStyles component="span" {...other}>
         {showColor.map((color, index) => (
            <IconStyles key={color + index} sx={{ bgcolor: color }} />
         ))}

         {colors.length > limit && (
            <Typography variant="subtitle2">{`+${moreColor}`}</Typography>
         )}
      </RootStyles>
   )
}
ColorPreview.propTypes = {
   colors: PropTypes.array.isRequired,
   limit: PropTypes.number,
}

export default ColorPreview
