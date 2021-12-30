import { Outlet } from 'react-router-dom'
import MainComponent from '../../../components/MainComponent'
import Scrollbar from '../../../components/Scrollbar'
// import SubNavSection from '../../../components/SubNavSection'

const ReportView = () => (
   <MainComponent>
      {/* <SubNavSection /> */}
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

export default ReportView
