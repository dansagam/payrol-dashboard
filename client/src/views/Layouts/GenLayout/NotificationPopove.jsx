import * as React from 'react'
import PropTypes from 'prop-types'
// import faker from 'faker'
import { formatDistanceToNow } from 'date-fns'
// react router
import { /** Link as RouterLink, */ useNavigate } from 'react-router-dom'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBell,
   faClock,
   faCheckDouble,
} from '@fortawesome/free-solid-svg-icons'
// materials
import IconButton from '@mui/material/IconButton'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Badge from '@mui/material/Badge'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import NOTIFICATIONS from '../../../_mocks_/notifications'
// components
import Scrollbar from '../../../components/Scrollbar'
import MenuPopover from '../../../components/MenuPopover'
// mock data
// import { mockImgAvatar } from '../../../utils/mockImages'

const renderContent = (notification) => {
   const title = (
      <Typography variant="subtitle2">
         {notification.title}
         <Typography
            component="span"
            variant="body2"
            sx={{ color: 'text.secondary' }}
         >
            &nbsp; {notification.description}
         </Typography>
      </Typography>
   )

   if (notification.type === 'order_placed') {
      return {
         avatar: (
            <img
               alt={notification.title}
               src="/static/icons/ic_notification_package.svg"
            />
         ),
         title,
      }
   }
   if (notification.type === 'order_shipped') {
      return {
         avatar: (
            <img
               alt={notification.title}
               src="/static/icons/ic_notification_shipping.svg"
            />
         ),
         title,
      }
   }
   if (notification.type === 'mail') {
      return {
         avatar: (
            <img
               alt={notification.title}
               src="/static/icons/ic_notification_mail.svg"
            />
         ),
         title,
      }
   }
   if (notification.type === 'chat_message') {
      return {
         avatar: (
            <img
               alt={notification.title}
               src="/static/icons/ic_notification_chat.svg"
            />
         ),
         title,
      }
   }
   return {
      avatar: <img alt={notification.title} src={notification.avatar} />,
      title,
   }
}
const NotificationItem = (props) => {
   const navigate = useNavigate()
   const { notification } = props
   const { avatar, title } = renderContent(notification)
   const handleListButton = () => {
      navigate('#')
   }
   return (
      <ListItemButton
         disableGutters
         onClick={handleListButton}
         sx={{
            py: 1.5,
            px: 2.5,
            mt: '1px',
            ...(notification.isUnRead && {
               bgcolor: 'action.selected',
            }),
         }}
      >
         <ListItemAvatar>
            <Avatar sx={{ bgcolo: 'background.neutral' }}>{avatar}</Avatar>
         </ListItemAvatar>
         <ListItemText
            primary={title}
            secondary={
               <Typography
                  variant="caption"
                  sx={{
                     mt: 0.5,
                     display: 'flex',
                     alignItems: 'center',
                     color: 'text.disabled',
                  }}
               >
                  <Box
                     component={FontAwesomeIcon}
                     icon={faClock}
                     sx={{ mr: 0.5, width: 16, height: 16 }}
                  />
                  {formatDistanceToNow(new Date(notification.createdAt))}
               </Typography>
            }
         />
      </ListItemButton>
   )
}
NotificationItem.propTypes = {
   notification: PropTypes.object.isRequired,
}
const NotificationPopove = () => {
   const navigate = useNavigate()
   const anchorRef = React.useRef(null)
   const [open, setOpen] = React.useState(false)
   const [notifications, setNotifications] = React.useState(NOTIFICATIONS)
   // to the get the total number of unread message
   const totalUnread = notifications.filter(
      (item) => item.isUnRead === true
   ).length
   const handleOpen = () => {
      setOpen(true)
   }
   const handleClose = () => {
      setOpen(false)
   }
   const handleButtonClick = () => {
      navigate('#')
   }
   const handleMarkAllAsRead = () => {
      setNotifications(
         notifications.map((notification) => ({
            ...notification,
            isUnRead: false,
         }))
      )
   }
   return (
      <>
         <IconButton
            ref={anchorRef}
            size="large"
            color={open ? 'primary' : 'default'}
            onClick={handleOpen}
            sx={{
               ...(open && {
                  bgcolor: (theme) =>
                     alpha(
                        theme.palette.primary.main,
                        theme.palette.action.focusOpacity
                     ),
               }),
            }}
         >
            <Badge badgeContent={totalUnread} color="error">
               <FontAwesomeIcon icon={faBell} height={20} width={20} />
            </Badge>
         </IconButton>
         <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
            sx={{ width: 360 }}
         >
            <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
               <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2">Notification</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                     You have {totalUnread} unread message
                  </Typography>
               </Box>
               {totalUnread > 0 && (
                  <Tooltip title="Mark all as read">
                     <IconButton onClick={handleMarkAllAsRead} color="primary">
                        <FontAwesomeIcon
                           icon={faCheckDouble}
                           height={20}
                           width={20}
                        />
                     </IconButton>
                  </Tooltip>
               )}
            </Box>
            <Divider sx={{ py: 1 }} />
            <Scrollbar sx={{ height: { xs: 340, sm: '400px' } }}>
               <List
                  disablePadding
                  subheader={
                     <ListSubheader
                        disableSticky
                        sx={{ py: 1, px: 2.5, typography: 'overline' }}
                     >
                        New
                     </ListSubheader>
                  }
               >
                  {notifications.slice(2, 5).map((notification) => (
                     <NotificationItem
                        key={notification._id}
                        notification={notification}
                     />
                  ))}
               </List>
               <List
                  disablePadding
                  subheader={
                     <ListSubheader
                        disableSticky
                        sx={{ py: 1, px: 2.5, typography: 'overline' }}
                     >
                        Before that
                     </ListSubheader>
                  }
               >
                  {notifications.slice(0, 2).map((notification) => (
                     <NotificationItem
                        key={notification._id}
                        notification={notification}
                     />
                  ))}
               </List>
            </Scrollbar>

            <Divider />

            <Box sx={{ p: 1 }}>
               <Button fullWidth disableRipple onClick={handleButtonClick}>
                  view all
               </Button>
            </Box>
         </MenuPopover>
      </>
   )
}

export default NotificationPopove
