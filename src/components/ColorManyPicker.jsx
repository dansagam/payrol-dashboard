// import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'

const IconColor = (props) => {
   const { sx, ...other } = props
   return (
      <Box
         sx={{
            width: 20,
            height: 20,
            display: 'flex',
            borderRadius: '50%',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'currentColor',
            transition: (theme) =>
               theme.transitions.create('all', {
                  duration: theme.transitions.duration.shortest,
               }),
            ...sx,
         }}
         {...other}
      >
         <FontAwesomeIcon icon={faCheck} />
      </Box>
   )
}
IconColor.propTypes = {
   sx: PropTypes.object,
}
const ColorManyPicker = (props) => {
   const { colors, onChecked, sx, ...other } = props
   return (
      <Box sx={sx}>
         {colors.map((color) => {
            const isWhite = color === '#FFFFFF' || color === 'white'
            return (
               <Checkbox
                  value={color}
                  key={color}
                  size="small"
                  color="default"
                  checked={onChecked(color)}
                  icon={
                     <IconColor
                        sx={{
                           ...(isWhite && {
                              bgcolor: (theme) =>
                                 `solid 1px ${theme.palette.divider}`,
                           }),
                        }}
                     />
                  }
                  checkedIcon={
                     <IconColor
                        sx={{
                           transform: 'scale(1.4)',
                           '&:before': {
                              opacity: 0.48,
                              width: '100%',
                              content: "''",
                              height: '100%',
                              borderRadius: '50%',
                              position: 'absolute',
                              boxShadow: '4px 4px 8px 0 currentColor',
                           },
                           '& svg': {
                              width: 12,
                              height: 12,
                              color: 'common.white',
                           },
                           ...(isWhite && {
                              border: (theme) =>
                                 `solid 1px ${theme.palette.divider}`,
                              boxShadow: (theme) =>
                                 `4px 4px 8px 0 ${theme.palette.grey[500_24]}`,
                              '& svg': {
                                 width: 12,
                                 height: 12,
                                 color: 'common.black',
                              },
                           }),
                        }}
                     />
                  }
                  sx={{
                     color,
                     '&:hover': { opacity: 0.72 },
                  }}
                  {...other}
               />
            )
         })}
      </Box>
   )
}

ColorManyPicker.propTypes = {
   colors: PropTypes.array.isRequired,
   onChecked: PropTypes.func,
   sx: PropTypes.object,
}

export default ColorManyPicker
