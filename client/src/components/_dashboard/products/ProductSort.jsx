import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faChevronCircleUp,
   faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

const stArray = [{ label: '', value: '373' }]
const ProductSort = () => {
   const [open, setOpen] = React.useState(null)
   const handleOpen = (e) => {
      setOpen(e.currentTarget)
   }
   const handleClose = () => {
      setOpen(null)
   }
   return (
      <>
         <Button
            color="inherit"
            disableRipple
            onClick={handleOpen}
            endIcon={
               <FontAwesomeIcon
                  icon={open ? faChevronCircleUp : faChevronDown}
               />
            }
         >
            Sort By: &nbsp;
            <Typography
               component="span"
               variant="subtitle2"
               sx={{ color: 'text.secondary' }}
            >
               Newest
            </Typography>
         </Button>
         <Menu
            keepMounted
            anchorEl={open}
            onClick={handleClose}
            open={Boolean(open)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         >
            {stArray.map((option) => (
               <MenuItem
                  key={option.value}
                  selected={option.value === 'newest'}
                  onClick={handleClose}
                  sx={{ typography: 'body2' }}
               >
                  {option.label}
               </MenuItem>
            ))}
         </Menu>
      </>
   )
}

export default ProductSort
