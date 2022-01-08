import PropTypes from 'prop-types'
import MuiCard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { styled, alpha } from '@mui/material/styles'

const Card = styled(MuiCard)(({ theme }) => ({
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
const IncomeOverall = (props) => {
   const { totalIncome, incomeFraction, ...other } = props
   return (
      <Card sx={{ width: `${incomeFraction * 100}%` }} {...other}>
         <Typography variant="body2">Income: {`$${totalIncome}`}</Typography>
         <PropDiv />
      </Card>
   )
}
IncomeOverall.propTypes = {
   incomeFraction: PropTypes.number,
   totalIncome: PropTypes.string,
}

export default IncomeOverall
