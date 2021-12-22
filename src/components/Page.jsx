import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { Helmet } from 'react-helmet-async'

// eslint-disable-next-line react/display-name
const Page = React.forwardRef(({ children, title = '', ...other }, ref) => (
   <Box ref={ref} {...other}>
      <Helmet>
         <title>{title}</title>
      </Helmet>
      {children}
   </Box>
))

Page.propTypes = {
   children: PropTypes.node.isRequired,
   title: PropTypes.string,
}
export default Page
