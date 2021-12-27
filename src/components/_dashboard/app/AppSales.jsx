import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { alpha, styled } from '@mui/material'
import PropTypes from 'prop-types'
import { fShortenNumber } from '../../../utils/formatNumber'

const RootStyle = styled(Card)(({ theme }) => ({
   boxShadow: 'none',
   textAlign: 'center',
   padding: theme.spacing(5, 0),
   color: theme.palette.primary.darker,
   backgroundColor: theme.palette.primary.lighter,
}))

const IconWrapperStyle = styled('div')(({ theme }) => ({
   margin: 'auto',
   display: 'flex',
   borderRadius: '50%',
   alignItems: 'center',
   width: theme.spacing(8),
   height: theme.spacing(8),
   justifyContent: 'center',
   marginBottom: theme.spacing(3),
   color: theme.palette.primary.dark,
   backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette.primary.dark,
      0
   )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}))

const AppSales = (props) => {
   const { TOTAL } = props
   return (
      <RootStyle>
         <IconWrapperStyle>
            <FontAwesomeIcon icon={faAndroid} width={24} height={24} />
         </IconWrapperStyle>
         <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
         <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
            Sales
         </Typography>
      </RootStyle>
   )
}

AppSales.propTypes = {
   TOTAL: PropTypes.number,
}
export default AppSales
