import { useRoutes, Navigate } from 'react-router-dom'

const routes = () =>
   useRoutes([
      {
         path: '/dashboard',
         element: '<DashboardView />',
         children: [
            { element: <Navigate to="/dashboard/app" replace /> },
            { path: 'app', element: 'DashboardApp' },
            { path: 'user', element: '<User />' },
            { path: 'products', element: '<Products />' },
         ],
      },
      {
         path: '/accounts',
         element: '<AccountView />',
         children: [
            { element: <Navigate to="/accounts/profile" replace /> },
            {
               path: 'accounts',
               element: '<Accounts />',
               children: [{ path: ':accountId', element: '<Account />' }],
            },
         ],
      },
      {
         path: '/sales',
         element: '<Sales />',
         children: [
            {
               path: 'invoices',
               element: '<Invoices />',
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
         path: '/expenses',
         element: '<ExpensesLayouts />',
         children: [
            {
               path: 'lists',
               element: '<Expenses />',
               children: [{ path: ':expense', element: '<Expense />' }],
            },
            { path: 'categories', element: '<ExpenseCategories />' },
         ],
      },
      {
         path: '/reports',
         element: '<ReportLayouts />',
         children: [],
      },
      {
         path: '/',
         element: '<LogoOnlyLayout />',
         children: [
            { path: 'login', element: '<Login />' },
            { path: 'register', element: '<Register />' },
            { path: '404', element: '<NotFound />' },
            { path: '/', element: <Navigate to="/dashboard" replace /> },
            { path: '*', element: <Navigate to="/404" replace /> },
         ],
      },
      { path: '*', element: <Navigate to="/404" replace /> },
   ])

export default routes
