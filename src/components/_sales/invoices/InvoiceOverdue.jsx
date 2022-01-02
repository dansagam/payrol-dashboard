import PropTypes from 'prop-types'
import { styled, alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

const RootStyle = styled(Card)(({ theme }) => ({
   boxShadow: 'none',
   textAlign: 'center',
   padding: theme.spacing(5, 0),
   color: theme.palette.info.darker,
   backgroundColor: theme.palette.info.lighter,
}))

const ProSpan = styled('div')(({ theme }) => ({
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

const InvoiceOverdue = (props) => {
   const { overdueAmount, overdueFraction, ...other } = props
   return (
      <RootStyle {...other} sx={{ width: `${overdueFraction * 100}%` }}>
         <Typography variant="subtitle2">
            Overdue: {`$${overdueAmount}`}
         </Typography>
         <ProSpan />
      </RootStyle>
   )
}

InvoiceOverdue.propTypes = {
   overdueAmount: PropTypes.string,
   overdueFraction: PropTypes.number,
}

export default InvoiceOverdue
