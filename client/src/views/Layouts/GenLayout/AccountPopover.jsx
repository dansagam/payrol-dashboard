import * as React from 'react'
import PropTypes from 'prop-types'
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons'
// react router
import { Link as RouterLink } from 'react-router-dom'
// materials
import { alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MenuPopover from '../../../components/MenuPopover'

const MENU_OPTIONS = [
   {
      label: 'Home',
      icon: faHome,
      linkTo: '/',
   },
   {
      label: 'Profile',
      icon: faUser,
      linkTo: '#',
   },
   {
      label: 'Settings',
      icon: faCog,
      linkTo: '#',
   },
]
const AccountPopover = ({ account }) => {
   const anchorRef = React.useRef(null)
   const [open, setOpen] = React.useState(false)
   const handleOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }
   return (
      <>
         <IconButton
            ref={anchorRef}
            onClick={handleOpen}
            sx={{
               padding: 0,
               width: 44,
               height: 44,
               ...(open && {
                  '&:before': {
                     zIndex: 1,
                     content: "''",
                     width: '100%',
                     height: '100%',
                     position: 'absolute',
                     bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                  },
               }),
            }}
         >
            <Avatar src={account.photoURL} alt="photoURL" />
         </IconButton>
         <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            sx={{
               width: 220,
            }}
         >
            <Box sx={{ my: 1.5, px: 2.5 }}>
               <Typography variant="subtitle1" noWrap>
                  {account.displayName}
               </Typography>
               <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                  noWrap
               >
                  {account.email}
               </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            {MENU_OPTIONS.map((option) => (
               <MenuItem
                  component={RouterLink}
                  key={option.label}
                  to={option.linkTo}
                  onClick={handleClose}
                  sx={{ typography: 'body2', py: 1, px: 2.5 }}
               >
                  <Box
                     component={FontAwesomeIcon}
                     icon={option.icon}
                     sx={{ mr: 2, width: 24, height: 24 }}
                  />
                  {option.label}
               </MenuItem>
            ))}
            <Box sx={{ p: 2, pt: 1.5 }}>
               <Button fullWidth color="inherit" variant="outlined">
                  Logout
               </Button>
            </Box>
         </MenuPopover>
      </>
   )
}
AccountPopover.propTypes = {
   account: PropTypes.object,
}

export default AccountPopover
