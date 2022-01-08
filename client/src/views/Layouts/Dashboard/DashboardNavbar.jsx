import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import {faMenu as fa2Menu } from '@fortawesome/free-brands-svg-icons'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'
import { MHidden } from '../../../components/@material-extend'

const DashboardNavbar = ({ onOpenSidebar }) => (
   <AppBar>
      <Toolbar>
         <MHidden width="lgUp">
            <IconButton
               onClick={onOpenSidebar}
               sx={{ mr: 1, color: 'text.primary' }}
            >
               <FontAwesomeIcon icon={faBars} />
            </IconButton>
         </MHidden>
         <div>Searchbar</div>
         <Box sx={{ flexGrow: 1 }} />
         <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 0.5, sm: 1.5 }}
         >
            <div>Language</div>
            <div> Notification</div>
            <div>Account</div>
         </Stack>
      </Toolbar>
   </AppBar>
)
DashboardNavbar.propTypes = {
   onOpenSidebar: PropTypes.func,
}

export default DashboardNavbar
