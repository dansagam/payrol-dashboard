// import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faNetworkWired,
   faPencilAlt,
   faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCalendar } from '@fortawesome/free-regular-svg-icons'
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'

const RootStyles = styled(Card)(({ theme }) => ({
   textAlign: 'center',
   padding: theme.spacing(5, 0),
}))
const IconStyles = styled(IconButton)(() => ({
   right: 16,
   top: 0,
   zIndex: 10,
   borderRadius: '50%',
   position: 'absolute',
}))
const InfoBoxStyles = styled('div')({
   top: 10,
   width: '100%',
   // height: '100%',
   position: 'absolute',
   bgcolor: '34faaf',
   zIndex: 6,
})
const BasicInfo = (props) => {
   // eslint-disable-next-line no-unused-vars
   const { payroll } = props
   return (
      <RootStyles>
         <Box sx={{ pt: '100%', position: 'relative' }}>
            <IconStyles>
               <FontAwesomeIcon icon={faPencilAlt} height={16} width={16} />
            </IconStyles>
            <InfoBoxStyles>
               <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ p: 2 }}
               >
                  <Avatar
                     alt="profile photo"
                     src="/static/logo.png"
                     sx={{ height: 80, width: 80 }}
                  />
                  <Typography variant="h5">ademiej</Typography>
                  <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                     ademiej
                  </Typography>
               </Stack>
            </InfoBoxStyles>
         </Box>
         <Divider sx={{ p: 3, my: 2 }} />
         <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ p: 2, my: 2 }}
         >
            <Typography
               component="div"
               variant="h6"
               sx={{ color: 'text.disabled' }}
            >
               Basic Info
            </Typography>
            <Stack
               direction="column"
               justifyContent="center"
               alignItems="center"
            >
               <List>
                  <ListItem>
                     <ListItemIcon>
                        <FontAwesomeIcon icon={faEnvelope} />
                     </ListItemIcon>
                     <ListItemText
                        primary="email"
                        primaryTypographyProps={{ variant: 'body1' }}
                     />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <FontAwesomeIcon icon={faCalendar} />
                     </ListItemIcon>
                     <ListItemText
                        primary="email"
                        primaryTypographyProps={{ variant: 'body1' }}
                     />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <FontAwesomeIcon icon={faNetworkWired} />
                     </ListItemIcon>
                     <ListItemText
                        primary="email"
                        primaryTypographyProps={{ variant: 'body1' }}
                     />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                     </ListItemIcon>
                     <ListItemText
                        primary="email"
                        primaryTypographyProps={{ variant: 'body1' }}
                     />
                  </ListItem>
               </List>
            </Stack>
         </Stack>
         <Divider />
         <Box>
            <Typography
               variant="body2"
               component="div"
               sx={{ color: 'text.disabled', textTransform: 'uppercase' }}
            >
               Pf Account Number
            </Typography>
         </Box>
         <Box sx={{ p: 3 }} />
      </RootStyles>
   )
}
BasicInfo.propTypes = {
   payroll: PropTypes.object,
}

BasicInfo.propTypes = {}

export default BasicInfo
