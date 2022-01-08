import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { styled, alpha } from '@mui/material/styles'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'

const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 92

const SearchbarStyles = styled('div')(({ theme }) => ({
   top: 0,
   left: 0,
   zIndex: 111,
   width: '100%',
   display: 'flex',
   position: 'absolute',
   alignItems: 'center',
   height: APPBAR_MOBILE,
   backdropFilter: 'blur(6px)',
   WebkitBackdropFilter: 'blur(6px)',
   padding: theme.spacing(0, 3),
   boxShadow: theme.customShadows.z8,
   backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
   [theme.breakpoints.up('md')]: {
      height: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5),
   },
}))

const Searchbar = () => {
   const [isOpen, setIsOpen] = React.useState(false)
   const handleOpen = () => {
      setIsOpen((prev) => !prev)
   }
   const handleClose = () => {
      setIsOpen(false)
   }
   React.useEffect(() => {
      // if(window.KeyboardEvent()){

      // }
      document.addEventListener('keydown', (e) => {
         if (e.key === 'Escape') {
            handleClose()
         }
         if (e.ctrlKey && e.key === 'k') {
            handleOpen()
         }
      })
      return () => {
         document.removeEventListener('keydown', handleClose)
      }
   })
   return (
      <ClickAwayListener onClickAway={handleClose}>
         <div>
            <IconButton onClick={handleOpen}>
               <Box
                  component={FontAwesomeIcon}
                  icon={faSearch}
                  width={20}
                  height={20}
               />
            </IconButton>
            <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
               <SearchbarStyles>
                  <Input
                     fullWidth
                     autoFocus
                     disableUnderline
                     placeholder="search or press Esc to exit"
                     startAdornment={
                        <InputAdornment position="start">
                           <Box
                              component={FontAwesomeIcon}
                              icon={faSearch}
                              sx={{
                                 width: 20,
                                 height: 20,
                                 color: 'text.disabled',
                              }}
                           />
                        </InputAdornment>
                     }
                     sx={{ mr: 1, fontWeight: 'fontWeightBol' }}
                  />
                  <Button variant="contained" onClick={handleClose}>
                     Search
                  </Button>
               </SearchbarStyles>
            </Slide>
         </div>
      </ClickAwayListener>
   )
}

export default Searchbar
