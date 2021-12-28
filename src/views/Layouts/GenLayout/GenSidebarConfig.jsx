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
            path: 'dashboard/app',
            icon: getIcon(faChartPie),
         },
         {
            title: 'users',
            path: '/dashboard/users',
            icon: getIcon(faUser),
         },
         {
            title: 'products',
            path: '/dashboard/products',
            icon: getIcon(faShoppingBag),
         },
      ],
   },
   {
      title: 'accounts',
      path: '/accounts/lists',
      icon: getIcon(faUsers),
   },
   {
      title: 'sales',
      path: 'products',
      icon: getIcon(faChartLine),
      children: [
         {
            title: 'Overview',
            path: '/sales/overview',
            icon: getIcon(faPiggyBank),
         },
         // {
         //    title: 'subscriptions',
         //    path: '/sales/subscriptions',
         //    icon: getIcon(faPiggyBank),
         // },
         {
            title: 'invoices',
            path: '/sales/invoices',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'customers',
            path: '/sales/customers',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'deposits',
            path: '/sales/deposits',
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
            path: '/expenses/categories',
            icon: getIcon(faPiggyBank),
         },
         {
            title: 'expenses',
            path: '/expenses/lists',
            icon: getIcon(faPiggyBank),
         },
      ],
   },
   {
      title: 'reports',
      path: '/reports',
      icon: getIcon(faUserPlus),
   },
   {
      title: 'Not found',
      path: '/404',
      icon: getIcon(faExclamationTriangle),
   },
]

export default GenSidebarConfig
