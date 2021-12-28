import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import {faMenu as fa2Menu } from '@fortawesome/free-brands-svg-icons'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import MoreIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import LanguagePopover from './LanguagePopover'
import AccountPopover from './AccountPopover'
import account from '../../../_mocks_/account'
import NotificationPopove from './NotificationPopove'

const GenNavbar = ({ onOpenSidebar }) => {
   const mobileMenuId = 'toggle-menu-id'
   const [anchorEl, setAnchorEl] = React.useState(null)
   const isMenuOpen = Boolean(anchorEl)
   const handleMenuOpen = React.useCallback((e) => {
      setAnchorEl(e.currentTarget)
   })
   const handleMenuClose = React.useCallback(() => {
      setAnchorEl(null)
   })
   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         id={mobileMenuId}
         keepMounted
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem>
            <AccountPopover account={account} />
         </MenuItem>
         <MenuItem>
            <NotificationPopove />
         </MenuItem>
         <MenuItem>
            <LanguagePopover />
         </MenuItem>
      </Menu>
   )
   return (
      <AppBar>
         <Toolbar>
            <Paper sx={{ display: { xs: 'block', lg: 'none' } }}>
               <IconButton
                  onClick={onOpenSidebar}
                  sx={{ mr: 1, color: 'text.primary' }}
               >
                  <FontAwesomeIcon icon={faBars} />
               </IconButton>
            </Paper>
            <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
               Searchbar
            </Paper>
            <div>dhdjsd</div>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
               <Stack
                  direction="row"
                  alignItems="center"
                  spacing={{ xs: 0.5, sm: 1.5 }}
               >
                  <LanguagePopover />
                  <NotificationPopove />
                  <AccountPopover account={account} />
               </Stack>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
               <IconButton
                  size="large"
                  color="inherit"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
               >
                  <MoreIcon />
               </IconButton>
            </Box>
         </Toolbar>
         {renderMenu}
      </AppBar>
   )
}
GenNavbar.propTypes = {
   onOpenSidebar: PropTypes.func,
}

export default GenNavbar
