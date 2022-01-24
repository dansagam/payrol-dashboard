import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
// components
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { LoginForm } from '../../forms/auths/login'
import AuthLayout from '../Layouts/AuthLayout'
import Page from '../../components/Page'

const RootStyle = styled(Page)(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      display: 'flex',
   },
}))

const SectionStyle = styled(Card)(({ theme }) => ({
   width: '100%',
   maxWidth: 464,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   margin: theme.spacing(2, 0, 2, 2),
}))

const ContentStyle = styled('div')(({ theme }) => ({
   maxWidth: 480,
   margin: 'auto',
   display: 'flex',
   minHeight: '100vh',
   flexDirection: 'column',
   justifyContent: 'center',
   padding: theme.spacing(12, 0),
}))

const Login = () => (
   <RootStyle title="Login ">
      <AuthLayout>
         Don&lsquo;t have an account? &nbsp;
         <Link
            underline="none"
            variant="subtitle2"
            component={RouterLink}
            to="/register"
         >
            Get started
         </Link>
      </AuthLayout>
      <Paper sx={{ display: { xs: 'none', md: 'block' } }}>
         <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
               Hi, Welcome Back
            </Typography>
            <img
               src="/static/illustrations/illustration_login.png"
               alt="login"
            />
         </SectionStyle>
      </Paper>
      <Container maxWidth="sm">
         <ContentStyle>
            <Stack sx={{ mb: 5 }}>
               <Typography variant="h4" gutterBottom>
                  Sign in to Payroll
               </Typography>
               <Typography sx={{ color: 'text.secondary' }}>
                  Enter your details below.
               </Typography>
            </Stack>
            <LoginForm />
            <Paper sx={{ display: { md: 'none', xs: 'block' } }}>
               <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                  Don&lsquo;t have an account?&nbsp;
                  <Link
                     variant="subtitle2"
                     component={RouterLink}
                     to="register"
                  >
                     Get started
                  </Link>
               </Typography>
            </Paper>
         </ContentStyle>
      </Container>
   </RootStyle>
)

export default Login
