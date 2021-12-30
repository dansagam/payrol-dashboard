import * as React from 'react'
// material
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
// components
import MenuPopover from '../../../components/MenuPopover'

const LANGS = [
   {
      value: 'en',
      label: 'English',
      icon: '/static/icons/ic_flag_en.svg',
   },
   {
      value: 'de',
      label: 'German',
      icon: '/static/icons/ic_flag_de.svg',
   },
   {
      value: 'fr',
      label: 'French',
      icon: '/static/icons/ic_flag_fr.svg',
   },
]
const LanguagePopover = () => {
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
                  bgcolor: (theme) =>
                     alpha(
                        theme.palette.primary.main,
                        theme.palette.action.focusOpacity
                     ),
               }),
            }}
         >
            {/* <img src={LANGS[0].icon} alt={LANGS[0].label} /> */}
            <Box
               component={FontAwesomeIcon}
               icon={faLanguage}
               height={30}
               width={30}
               sx={{ color: 'primary.dark' }}
            />
         </IconButton>
         <MenuPopover
            open={open}
            onClose={handleClose}
            anchorEl={anchorRef.current}
         >
            <Box sx={{ py: 1 }}>
               {LANGS.map((option) => (
                  <MenuItem
                     key={option.value}
                     selected={option.value === LANGS[0].value}
                     onClick={handleClose}
                     sx={{ py: 1, px: 2.5 }}
                  >
                     {/* <ListItemIcon>
                        <Box
                           component="img"
                           alt={option.label}
                           src={option.icon}
                        />
                     </ListItemIcon> */}
                     <ListItemText
                        primaryTypographyProps={{ variant: 'body2' }}
                     >
                        {option.label}
                     </ListItemText>
                  </MenuItem>
               ))}
            </Box>
         </MenuPopover>
      </>
   )
}

export default LanguagePopover
