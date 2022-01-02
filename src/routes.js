import { useRoutes, Navigate } from 'react-router-dom'
// views layout
import DefaultLayout from './views/Layouts/GenLayout'
import DashboardLayout from './views/Layouts/Dashboard'
import ExpensesViews from './views/Layouts/Expenses'
import SalesView from './views/Layouts/Sales'
import ReportView from './views/Layouts/Report'
import AccountView from './views/Layouts/Accounts'
// import LogoOnlyLayout from './views/Layouts/LogoOnlyLayout'
// view screen
import DashboardApp from './views/Screens/Dashboard/DashboardApp'
import Expenses from './views/Screens/Expenses/Expenses'
import Products from './views/Screens/Dashboard/Products'
import Invoices from './views/Screens/Sales/Invoices'

const Routes = () =>
   useRoutes([
      {
         path: '/',
         element: <DefaultLayout />,
         children: [
            { index: true, element: <Navigate to="/dashboard" /> },
            {
               path: 'dashboard',
               element: <DashboardLayout />,
               children: [
                  { index: true, element: <Navigate to="/dashboard/app" /> },
                  { path: 'app', element: <DashboardApp /> },
                  { path: 'users', element: '<User />' },
                  { path: 'products', element: <Products /> },
               ],
            },
            {
               path: 'accounts',
               element: <AccountView />,
               children: [
                  { element: <Navigate to="/accounts/lists" replace /> },
                  {
                     path: 'lists',
                     element: '<Accounts />',
                     children: [
                        {
                           path: ':accountId',
                           element: '<Account />',
                        },
                     ],
                  },
               ],
            },
            {
               path: 'sales',
               element: <SalesView />,
               children: [
                  {
                     index: true,
                     element: <Navigate to="/sales/invoices" />,
                  },
                  {
                     path: 'invoices',
                     element: <Invoices />,
                     children: [{ path: ':invoice', element: '<Invoice />' }],
                  },
                  {
                     path: 'overview',
                     element: '<Overviews />',
                  },
                  {
                     path: 'customers',
                     element: '<CustomerSales />',
                  },
                  {
                     path: 'deposits',
                     element: '<Deposits />',
                  },
               ],
            },
            {
               path: 'expenses',
               element: <ExpensesViews />,
               children: [
                  {
                     index: true,
                     element: <Navigate to="/expenses/lists" />,
                  },
                  {
                     path: 'lists',
                     element: <Expenses />,
                     children: [{ path: ':expense', element: '<Expense />' }],
                  },
                  { path: 'categories', element: '<ExpenseCategories />' },
               ],
            },
            {
               path: 'reports',
               element: <ReportView />,
            },
            { path: 'login', element: '<Login />' },
            { path: 'register', element: '<Register />' },
            { path: '404', element: '<NotFound />' },
            { path: '*', element: <Navigate to="/404" replace /> },
         ],
      },
      { path: '*', element: <Navigate to="/404" replace /> },
   ])

export default Routes
