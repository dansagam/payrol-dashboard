/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import PropTypes from 'prop-types'
// react router
import { Link as RouterLink, useLocation } from 'react-router-dom'
// material
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
// components
import Scrollbar from '../../../components/Scrollbar'
import Logo from '../../../components/Logo'
import NavField from '../../../components/NavField'
import sidebarConfig from './GenSidebarConfig'

const DRAWER_WIDTH = 280

const RootStyle = styled('div')(({ theme }) => ({
   [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: DRAWER_WIDTH,
   },
}))

const AccountStyle = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   padding: theme.spacing(2, 2.5),
   borderRadius: theme.shape.borderRadiusSm,
   backgroundColor: theme.palette.grey[200],
}))

const GenSidebar = ({ isOpenSidebar, onCloseSidebar, account }) => {
   const { pathname } = useLocation()
   React.useEffect(() => {
      if (isOpenSidebar) {
         onCloseSidebar()
      }
   }, [pathname])
   const renderContent = (
      <Scrollbar
         sx={{
            height: '100%',
            '& .simplebar-content': {
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
            },
         }}
      >
         <Box sx={{ px: 2.5, py: 3 }}>
            <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
               <Logo src="/static/logo.svg" />
            </Box>
         </Box>
         <Box>
            <Link to="#" component={RouterLink} underline="none">
               <AccountStyle>
                  <Avatar src={account.photoURL} alt="photoAvatar" />
                  <Box sx={{ ml: 2 }}>
                     <Typography
                        variant="subtitle2"
                        sx={{ color: 'text.primary' }}
                     >
                        {account.displayName}
                     </Typography>
                     <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                     >
                        {account.role}
                     </Typography>
                  </Box>
               </AccountStyle>
            </Link>
         </Box>
         <NavField navConfig={sidebarConfig} />
         <Box sx={{ flexGrow: 1 }} />
         <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
            <Stack
               alignItems="center"
               spacing={3}
               sx={{
                  p: 2.5,
                  pt: 5,
                  borderRadius: 2,
                  position: 'relative',
                  bgcolor: 'grey.200',
               }}
            >
               <Box
                  component="img"
                  src="/static/illustrations/illustration_avatar.png"
                  sx={{ width: 100, position: 'absolute' }}
               />
               <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>
                     Need more?
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     varian
                  </Typography>
               </Box>
               <Button
                  fullWidth
                  href="#https://material-ui.com/store/items/minimal-dashboard/"
                  target="_blank"
                  variant="contained"
               >
                  None
               </Button>
            </Stack>
         </Box>
      </Scrollbar>
   )
   return (
      <RootStyle>
         <Paper sx={{ display: { xs: 'block', lg: 'none' } }}>
            <Drawer
               open={isOpenSidebar}
               onClose={onCloseSidebar}
               PaperProps={{ sx: { width: DRAWER_WIDTH } }}
            >
               {renderContent}
            </Drawer>
         </Paper>
         <Paper sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Drawer
               open
               variant="persistent"
               PaperProps={{
                  sx: {
                     width: DRAWER_WIDTH,
                     bgcolor: 'background.default',
                  },
               }}
            >
               {renderContent}
            </Drawer>
         </Paper>
      </RootStyle>
   )
}

GenSidebar.propTypes = {
   isOpenSidebar: PropTypes.bool,
   onCloseSidebar: PropTypes.func,
   account: PropTypes.object,
}
export default GenSidebar
