import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faChartPie,
   faShoppingBag,
   faLock,
   faUserPlus,
   faExclamationTriangle,
   faUsers,
   faUser,
   faPiggyBank,
   faChartLine,
} from '@fortawesome/free-solid-svg-icons'

const getIcon = (name) => <FontAwesomeIcon icon={name} width={22} height={22} />
const GenSidebarConfig = [
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
            icon: getIcon(faUser),
         },
         {
            title: 'products',
            path: 'products',
            icon: getIcon(faShoppingBag),
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
      icon: getIcon(faChartLine),
      children: [
         {
            title: 'Overview',
            path: 'overview',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'subscriptions',
            path: 'subscriptions',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'invoices',
            path: 'invoices',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'customers',
            path: 'customers',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'deposits',
            path: 'deposits',
            icon: getIcon(faPiggyBank),
         },
      ],
   },
   {
      title: 'expenses',
      path: 'expenses',
      icon: getIcon(faLock),
      children: [
         {
            title: 'categories',
            path: 'invoices',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'expenses',
            path: 'expenses',
            icon: getIcon(faPiggyBank),
         },
      ],
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

export default GenSidebarConfig
