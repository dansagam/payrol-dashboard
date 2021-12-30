import { Outlet } from 'react-router-dom'
// components
import subNavConfig from './DashboardSubNavbar'
import SubNavSection from '../../../components/SubNavSection'
import Scrollbar from '../../../components/Scrollbar'
import MainComponent from '../../../components/MainComponent'
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
const DashboardLayout = () => (
   // const [open, setOpen] = React.useState(false)
   <MainComponent>
      <SubNavSection subNavConfig={subNavConfig} />
      <Scrollbar
         sx={{
            height: '100%',
            '& .simplebar-content': {
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
            },
         }}
      >
         <Outlet />
      </Scrollbar>
   </MainComponent>
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
