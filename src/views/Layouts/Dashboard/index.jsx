// import * as React from 'react'
import { Outlet } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
// import DashboardNavbar from './DashboardNavbar'
// import DashboardSidebar from './DashboardSidebar'
// import account from '../../../_mocks_/account'

// const APP_BAR_MOBILE = 64
// const APP_BAR_DESKTOP = 92

// const RootStyles = styled('div')({
//    display: 'flex',
//    minHeight: '100%',
//    overflow: 'hidden',
// })
const MainStyles = styled('div')(({ theme }) => ({
   flexGrow: 1,
   overflow: 'auto',
   minHeight: '100%',
   paddingTop: 24,
   paddingBottom: theme.spacing(10),
   [theme.breakpoints.up('lg')]: {
      paddingTop: 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
   },
}))
const DashboardLayout = () => (
   // const [open, setOpen] = React.useState(false)
   <MainStyles>
      <Outlet />
   </MainStyles>
   // <RootStyles>
   //    <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
   //    <DashboardSidebar
   //          account={account}
   //          onCloseSidebar={() => setOpen(false)}
   //          isOpenSidebar={open}
   //       />
   // </RootStyles>
)

export default DashboardLayout
