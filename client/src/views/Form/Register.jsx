import * as React from 'react'
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
import AuthLayout from '../Layouts/AuthLayout'
import Page from '../../components/Page'
import { RegisterForm } from '../../forms/auths/register'

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

const Register = () => (
   <RootStyle>
      <AuthLayout>
         Already got an account? &nbsp;
         <Link
            underline="none"
            variant="subtitle2"
            component={RouterLink}
            to="/login"
         >
            Login
         </Link>
      </AuthLayout>
      <Paper sx={{ display: { xs: 'none', md: 'block' } }}>
         <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
               Manage the job more effectively with Minimal
            </Typography>
            <img
               alt="register"
               src="/static/illustrations/illustration_register.png"
            />
         </SectionStyle>
      </Paper>
      <Container>
         <ContentStyle>
            <Box sx={{ mb: 5 }}>
               <Typography variant="h4">
                  Getting started with the payroll
               </Typography>
               <Typography sx={{ color: 'text.secondary' }}>
                  Free demo account
               </Typography>
            </Box>
            <RegisterForm />
            <Typography>
               By registering, you agree to the &nbsp;
               <Link
                  component={RouterLink}
                  to="#f"
                  underline="always"
                  sx={{ color: 'text.primary' }}
               >
                  Term of Service
               </Link>
               &nbsp; and &nbsp;
               <Link
                  component={RouterLink}
                  to="#f"
                  underline="always"
                  sx={{ color: 'text.primary' }}
               >
                  Privacy Policy
               </Link>
            </Typography>
            <Paper sx={{ display: { xs: 'block', sm: 'none' } }}>
               <Typography
                  variant="subtitle2"
                  sx={{ mt: 3, textAlign: 'center' }}
               >
                  Already got an account? &nbsp;
                  <Link
                     underline="none"
                     variant="subtitle2"
                     component={RouterLink}
                     to="/login"
                  >
                     Login
                  </Link>
               </Typography>
            </Paper>
         </ContentStyle>
      </Container>
   </RootStyle>
)

export default Register
