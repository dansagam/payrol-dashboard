import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import ExpenseOverall from './ExpenseOverall'
import IncomeOverall from './IncomeOverall'

const ExpenseDisplay = (props) => {
   const {
      expenseFraction,
      expenseTotal,
      totalIncome,
      incomeFraction,
      ...other
   } = props
   return (
      <Box component="div" sx={{ flex: 1, display: 'flex' }} {...other}>
         <ExpenseOverall
            expenseFraction={expenseFraction}
            expenseTotal={expenseTotal}
         />
         <IncomeOverall
            incomeFraction={incomeFraction}
            totalIncome={totalIncome}
         />
      </Box>
   )
}

ExpenseDisplay.propTypes = {
   expenseFraction: PropTypes.number,
   expenseTotal: PropTypes.string,
   totalIncome: PropTypes.string,
   incomeFraction: PropTypes.number,
}

export default ExpenseDisplay
