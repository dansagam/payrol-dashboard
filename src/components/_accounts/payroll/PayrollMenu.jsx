import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faEdit,
   faChevronDown,
   faChevronLeft,
   faCheck,
   faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
// import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

const PayrollMenu = () => {
   const ref = React.useRef(null)
   const [isOpen, setIsOpen] = React.useState(false)
   return (
      <>
         <Button
            variant="outlined"
            onClick={() => setIsOpen(true)}
            endIcon={
               <FontAwesomeIcon
                  icon={isOpen ? faChevronDown : faChevronLeft}
                  height={20}
                  width={20}
               />
            }
         >
            <Typography variant="h3">Add New Member</Typography>
         </Button>
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
            <MenuItem>
               <ListItemIcon>
                  <FontAwesomeIcon
                     icon={faEdit}
                     size="small"
                     height={24}
                     width={24}
                  />
               </ListItemIcon>
               <ListItemText
                  primary="Edit"
                  primaryTypographyProps={{ variant: 'body2' }}
               />
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <FontAwesomeIcon
                     icon={faCheck}
                     size="small"
                     height={24}
                     width={24}
                  />
               </ListItemIcon>
               <ListItemText
                  primary="Approve"
                  primaryTypographyProps={{ variant: 'body2' }}
               />
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <FontAwesomeIcon
                     icon={faTimesCircle}
                     size="small"
                     height={24}
                     width={24}
                  />
               </ListItemIcon>
               <ListItemText
                  primary="Disapprove"
                  primaryTypographyProps={{
                     variant: 'body2',
                     color: 'warning.darker',
                  }}
               />
            </MenuItem>
         </Menu>
      </>
   )
}

export default PayrollMenu
