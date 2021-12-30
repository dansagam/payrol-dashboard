import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

const RootStyles = styled('div')(({ theme }) => ({
   flexGrow: 1,
   overflow: 'hidden',
   minHeight: '100%',
   // paddingTop: 24,
   paddingBottom: theme.spacing(10),
   [theme.breakpoints.up('lg')]: {
      // paddingTop: 24,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
   },
}))
const MainComponent = ({ children }) => <RootStyles>{children}</RootStyles>

MainComponent.propTypes = {
   children: PropTypes.node,
}

export default MainComponent
