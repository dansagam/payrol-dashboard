import PropTypes from 'prop-types'
// import Box from '@mui/material/Box'
// import Stack from '@mui/material/Stack'
import { styled, alpha } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const RootStyle = styled(Card)(({ theme }) => ({
   boxShadow: 'none',
   textAlign: 'center',
   padding: theme.spacing(5, 0),
   color: theme.palette.info.darker,
   backgroundColor: theme.palette.info.lighter,
}))

const PropDiv = styled('div')(({ theme }) => ({
   margin: 'none',
   width: '100%',
   height: theme.spacing(3),
   justifyContent: 'center',
   marginBottom: theme.spacing(3),
   color: theme.palette.warning.dark,
   backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette.warning.dark,
      0
   )} 0%, ${alpha(theme.palette.warning.dark, 0.24)} 100%)`,
}))

const ExpenseOverall = (props) => {
   const { expenseFraction, expenseTotal, ...other } = props
   return (
      <RootStyle {...other} sx={{ width: `${expenseFraction * 100}%` }}>
         <Typography variant="body2">
            Total Expense: {`$${expenseTotal}`}
         </Typography>
         <PropDiv />
      </RootStyle>
   )
}

ExpenseOverall.propTypes = {
   expenseTotal: PropTypes.string,
   expenseFraction: PropTypes.number,
}

export default ExpenseOverall
