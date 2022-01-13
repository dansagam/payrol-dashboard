import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Logo from '../../components/Logo'

const HeaderStyle = styled('header')(({ theme }) => ({
   top: 0,
   zIndex: 9,
   lineHeight: 0,
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   position: 'absolute',
   padding: theme.spacing(3),
   justifyContent: 'space-between',
   [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      padding: theme.spacing(7, 5, 0, 7),
   },
}))

const AuthLayout = (props) => {
   const { children } = props
   return (
      <HeaderStyle>
         <RouterLink to="/">
            <Logo src="/static/logo.png" />
         </RouterLink>
         <Paper sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography
               variant="body2"
               sx={{
                  mt: { md: -2 },
               }}
            >
               {children}
            </Typography>
         </Paper>
      </HeaderStyle>
   )
}

AuthLayout.propTypes = {
   children: PropTypes.node,
}

export default AuthLayout
