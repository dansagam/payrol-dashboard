// import React from 'react'
import IconButton from '@mui/material/IconButton'
import Icon from '@mui/material/Icon'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import ArrowUpward from '@mui/icons-material/ArrowUpward'

const PLUGIN_HEIGHT = 60 + 24
const BoxRoot = styled(Box)(({ theme }) => ({
   position: 'fixed',
   top: `calc(100% - ${PLUGIN_HEIGHT}px)`,
   bgcolor: theme.palette.secondary.dark,
   height: PLUGIN_HEIGHT,
   width: 64,
   right: 18,
   zIndex: 5,
   fontWeight: 500,
   display: 'block',
   borderRadius: '50%',
   textAlign: 'center',
}))
const FixedScrollPlugin = () => {
   const handleTopScroll = () => {
      window.scrollTo(0, 0)
   }
   return (
      <BoxRoot color="light" onClick={handleTopScroll}>
         <IconButton>
            <Icon>
               <ArrowUpward
                  sx={{
                     color: (theme) => theme.palette.secondary.main,
                  }}
               />
            </Icon>
         </IconButton>
      </BoxRoot>
   )
}

export default FixedScrollPlugin
