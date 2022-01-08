import * as React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faEdit,
   // faTrashAlt as fasTrashAlt,
   faEllipsisV,
} from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'

const UserListMenu = () => {
   const ref = React.useRef(null)
   const [isopen, setIsOpen] = React.useState(false)

   return (
      <>
         <IconButton ref={ref} onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon
               icon={faEllipsisV}
               style={{ fontSize: '1rem' }}
               width={20}
               height={20}
            />
         </IconButton>
         <Menu
            open={isopen}
            anchorEl={ref.current}
            onClose={() => setIsOpen(false)}
            PaperProps={{
               sx: { width: 200, maxWidth: '100%' },
            }}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         >
            <MenuItem sx={{ color: 'text.secondary' }}>
               <ListItemIcon>
                  <FontAwesomeIcon icon={faTrashAlt} width={24} height={24} />
               </ListItemIcon>
               <ListItemText
                  primary="Delete"
                  primaryTypographyProps={{ variant: 'body2' }}
               />
            </MenuItem>
            <MenuItem
               LinkComponent={RouteLink}
               href="#"
               sx={{ color: 'text.secondary' }}
            >
               <ListItemIcon>
                  <FontAwesomeIcon icon={faEdit} width={24} height={24} />
               </ListItemIcon>
               <ListItemText
                  primary="Edit"
                  primaryTypographyProps={{ variant: 'body2' }}
               />
            </MenuItem>
         </Menu>
      </>
   )
}

export default UserListMenu
