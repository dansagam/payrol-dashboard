const role = [
   {
      _id: 'payrollperiodmodeid',
      role: ['monthly', 'weekly', 'bi-weekly', 'hourly'],
   },
   {
      _id: 'payrollstatusid',
      role: ['pending', 'active', 'inactive', 'finalised', 'close'],
   },
   {
      _id: 'payrollpaymentstatusid',
      role: ['paid', 'unpaid', 'partial'],
   },
   {
      _id: 'paymentpaymentstatusid',
      role: ['paid', 'unpaid', 'partial'],
   },
   {
      _id: 'paymentpaymentfrequencyid',
      role: ['weekly', 'hourly', 'monthly'],
   },
   {
      _id: 'employeesalarymodeid',
      role: ['monthly', 'weekly', 'bi-weekly', 'hourly'],
   },
   {
      _id: 'employeeprefixid',
      role: ['Mr', 'Mrs', 'Miss', 'Ms', 'Engr', 'Dr', 'Prof', 'Pastor'],
   },
   {
      _id: 'customerstatusid',
      role: ['active', 'inactive', 'suspended'],
   },
   {
      _id: 'employeerole',
      role: [
         'engineering',
         'account',
         'customer care',
         'management',
         'general',
      ],
   },
   {
      _id: 'accountbanknameid',
      role: ['UBA', 'Ecobank', 'GTBank', 'FirstBank'],
   },
]

export default role
