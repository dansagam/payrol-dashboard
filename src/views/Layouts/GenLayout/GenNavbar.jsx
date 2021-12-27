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

const GenNavbar = ({ onOpenSidebar }) => (
   <AppBar>
      <Toolbar>
         <Paper sx={{ xs: 'block', lg: 'none' }}>
            <IconButton
               onClick={onOpenSidebar}
               sx={{ mr: 1, color: 'text.primary' }}
            >
               <FontAwesomeIcon icon={faBars} />
            </IconButton>
         </Paper>
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
GenNavbar.propTypes = {
   onOpenSidebar: PropTypes.func,
}

export default GenNavbar
