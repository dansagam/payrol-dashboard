// import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

const IconWrapperStyle = styled(IconButton)(() => ({
   zIndex: 10,
   top: 5,
   right: 5,
   position: 'absolute',
}))
const PaymentInfo = (props) => {
   // eslint-disable-next-line no-unused-vars
   const { payroll } = props
}

PaymentInfo.propTypes = {
   payroll: PropTypes.object,
}

export default PaymentInfo
