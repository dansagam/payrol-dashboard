import * as React from 'react'
import { Outlet } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
import GenNavbar from './GenNavbar'
import GenSidebar from './GenSidebar'
import account from '../../../_mocks_/account'
import FixedScrollPlugin from '../../../components/FixedScrollPlugin'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const RootStyles = styled('div')({
   display: 'flex',
   minHeight: '100%',
   overflow: 'hidden',
})
const MainStyles = styled('div')(({ theme }) => ({
   flexGrow: 1,
   overflow: 'auto',
   minHeight: '100%',
   paddingTop: APP_BAR_MOBILE + 24,
   paddingBottom: theme.spacing(10),
   [theme.breakpoints.up('lg')]: {
      paddingTop: APP_BAR_DESKTOP + 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
   },
}))

const DefaultLayout = () => {
   const [open, setOpen] = React.useState(false)
   return (
      <RootStyles>
         <GenNavbar onOpenSidebar={() => setOpen(true)} />
         <GenSidebar
            account={account}
            onCloseSidebar={() => setOpen(false)}
            isOpenSidebar={open}
         />
         <MainStyles>
            <Outlet />
         </MainStyles>
         <FixedScrollPlugin />
      </RootStyles>
   )
}
export default DefaultLayout
