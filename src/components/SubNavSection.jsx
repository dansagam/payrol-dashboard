import PropTypes from 'prop-types'
import {
   useLocation,
   /** matchPath, */ Link as RouterLink,
} from 'react-router-dom'
import { styled, /** useTheme, */ alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
// import AppBar from '@mui/material/AppBar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

const APPBAR_MOBILE = 32
const APPBAR_DESKTOP = 50
const DRAWER_WIDTH = 280

const RootStyles = styled(Box)(({ theme }) => ({
   boxShadow: 'none',
   // position: 'fixed',
   // zIndex: 4,
   // width: '80%',
   backdropFilter: 'blur(60px)',
   WebkitBackdropFilter: 'blur(60px)',
   backgroundColor: alpha(theme.palette.background.default, 0.27),
   minHeight: APPBAR_MOBILE,
   [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
   },
}))
const PaperStyles = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   height: 20,
   position: 'relative',
   textTransform: 'capitalize',
   paddingLeft: theme.spacing(5),
   paddingRight: theme.spacing(2.5),
   color: theme.palette.text.secondary,
   '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: 'none',
      position: 'absolute',
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main,
   },
   '&:hover': {
      textDecoration: 'underline',
   },
}))

const BarWrapper = styled('div')(() => ({
   margin: 'auto',
   // display: 'flex',
}))
const NavItem = ({ navConfig, active }) => {
   // const theme = useTheme()
   const { title, path, icon } = navConfig
   const isActiveRoot = active(path)
   // console.log(isActiveRoot)
   // console.log(path)

   const activeRootStyle = {
      color: 'primary.main',
      fontWeight: 'fontWeightMedium',
      textDecoration: 'underline',
      // bgcolor: alpha(
      //    theme.palette.primary.main,
      //    theme.palette.action.selectedOpacity
      // ),
      // '&:before': { display: 'block' },
   }
   return (
      <Box>
         <PaperStyles
            component={RouterLink}
            underline="none"
            to={path}
            sx={{
               display: {
                  xs: 'none',
                  md: 'block',
               },
               textDecoration: 'none',
               ...(isActiveRoot && activeRootStyle),
            }}
         >
            <Typography variant="body2">{title}</Typography>
         </PaperStyles>
         <Paper
            component={RouterLink}
            to={path}
            sx={{
               display: {
                  xs: 'bloack',
                  md: 'none',
               },
            }}
         >
            <IconButton>
               <Box
                  component="span"
                  icon={icon}
                  sx={{ ...(isActiveRoot && activeRootStyle) }}
               >
                  {icon}
               </Box>
            </IconButton>
         </Paper>
      </Box>
   )
}
NavItem.propTypes = {
   active: PropTypes.func,
   navConfig: PropTypes.object,
}
const SubNavSection = ({ subNavConfig, ...other }) => {
   const { pathname } = useLocation()
   const pathString = pathname.split('/')
   const activePathString = pathString[pathString.length - 1]
   // console.log(pathname)
   // console.log(pathString)
   // console.log(activePathString)
   const match = (path) => {
      if (path === activePathString) {
         return true
      }
      return false
   }
   // const match = (path) =>
   //    path ? !matchPath({ path, end: false }, activePathString) : false
   return (
      <RootStyles {...other}>
         <Container sx={{ width: '80%' }}>
            <BarWrapper>
               <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ px: 5 }}
               >
                  {subNavConfig.map((navConfig) => (
                     <NavItem
                        key={navConfig.label}
                        navConfig={navConfig}
                        active={match}
                     />
                  ))}
               </Stack>
               <Box />
            </BarWrapper>
         </Container>
      </RootStyles>
   )
}
SubNavSection.propTypes = {
   subNavConfig: PropTypes.array.isRequired,
}

export default SubNavSection
