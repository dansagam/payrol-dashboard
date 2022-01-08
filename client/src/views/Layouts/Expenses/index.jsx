import { Outlet } from 'react-router-dom'
import MainComponent from '../../../components/MainComponent'
import Scrollbar from '../../../components/Scrollbar'
import SubNavSection from '../../../components/SubNavSection'
import subNavConfig from './ExpensesSubNavConfig'

const ExpensesViews = () => (
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
)

export default ExpensesViews
