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
   width: `100%`,
   height: theme.spacing(3),
   justifyContent: 'center',
   marginBottom: theme.spacing(3),
   color: theme.palette.warning.dark,
   backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette.warning.dark,
      0
   )} 0%, ${alpha(theme.palette.warning.dark, 0.24)} 100%)`,
}))

const InvoiceDueSoon = (props) => {
   const { dueSoonAmount, dueSoonFraction, ...other } = props
   return (
      <RootStyle {...other} sx={{ width: `${dueSoonFraction * 100}%` }}>
         <Typography variant="body2">
            Due Soon: {`$${dueSoonAmount}`}
         </Typography>
         <ProSpan />
      </RootStyle>
   )
}

InvoiceDueSoon.propTypes = {
   dueSoonAmount: PropTypes.string,
   dueSoonFraction: PropTypes.number,
}

export default InvoiceDueSoon
