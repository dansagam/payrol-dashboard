import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import ExpenseListCard from './ExpenseListCard'

const ExpenseList = ({ expenses, ...other }) => (
   <Grid container {...other}>
      {expenses.map((expense) => (
         <Grid key={expense._id} item md={12}>
            <ExpenseListCard expense={expense} />
         </Grid>
      ))}
   </Grid>
)

ExpenseList.propTypes = {
   expenses: PropTypes.array.isRequired,
}

export default ExpenseList
