import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faChartPie,
   faShoppingBag,
   faLock,
   faUserPlus,
   faExclamationTriangle,
   faUsers,
} from '@fortawesome/free-solid-svg-icons'

const getIcon = (name) => <FontAwesomeIcon icon={name} width={22} height={22} />
const sideBarConfig = [
   {
      title: 'dashboard',
      path: 'dashboard',
      icon: getIcon(faChartPie),
      children: [
         {
            title: 'dashboard',
            path: 'app',
            icon: getIcon(faChartPie),
         },
         {
            title: 'users',
            path: 'users',
            icon: getIcon(faChartPie),
         },
      ],
   },
   {
      title: 'accounts',
      path: 'users',
      icon: getIcon(faUsers),
   },
   {
      title: 'sales',
      path: 'products',
      icon: getIcon(faShoppingBag),
   },
   {
      title: 'expenses',
      path: '/login',
      icon: getIcon(faLock),
   },
   {
      title: 'reports',
      path: '/register',
      icon: getIcon(faUserPlus),
   },
   {
      title: 'Not found',
      path: '/404',
      icon: getIcon(faExclamationTriangle),
   },
]

export default sideBarConfig
