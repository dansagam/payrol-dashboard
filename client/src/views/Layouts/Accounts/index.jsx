import { Outlet } from 'react-router-dom'
import MainComponent from '../../../components/MainComponent'
import Scrollbar from '../../../components/Scrollbar'

const AccountView = () => (
   <MainComponent>
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
)

export default AccountView
