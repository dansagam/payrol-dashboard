import * as React from 'react'
// import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { useNavigate } from 'react-router-dom'

const CustomeerListMenu = () => {
   const navigate = useNavigate()
   const ref = React.useRef(null)
   const [isOpen, setIsOpen] = React.useState(false)
   const handleMenuLink = () => {
      navigate('#')
   }
   return (
      <>
         <IconButton ref={ref} onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon
               icon={faEllipsisV}
               size="small"
               style={{ fontSize: '1rem' }}
               height={24}
               width={24}
            />
         </IconButton>
         <Menu
            open={isOpen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
               sx: { width: 200, maxWidth: '100%' },
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         >
            <MenuItem onClick={handleMenuLink} sx={{ color: 'text.secondary' }}>
               <ListItemIcon>
                  <FontAwesomeIcon
                     icon={faEdit}
                     size="small"
                     height={20}
                     width={20}
                  />
               </ListItemIcon>
               <ListItemText
                  primary="Edit"
                  primaryTypographyProps={{ variant: 'body2' }}
               />
            </MenuItem>
            <MenuItem sx={{ color: 'text.secondary' }}>
               <ListItemIcon>
                  <FontAwesomeIcon
                     icon={faTrashAlt}
                     size="small"
                     height={20}
                     width={20}
                  />
               </ListItemIcon>
               <ListItemText
                  primary="Delete"
                  primaryTypographyProps={{ variant: 'body2' }}
               />
            </MenuItem>
         </Menu>
      </>
   )
}

// CustomeerListMenu.propTypes = {}

export default CustomeerListMenu
