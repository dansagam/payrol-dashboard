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

const PersonalInfo = (props) => {
   // eslint-disable-next-line no-unused-vars
   const { payroll } = props
   return (
      <Card>
         <Box sx={{ position: 'relative' }}>
            <Typography variant="h4" sx={{ color: 'text.disabled' }}>
               Personal Information
            </Typography>
            <Table size="small">
               <TableBody>
                  <TableRow>
                     <TableCell align="left">
                        <Typography
                           variant="h6"
                           sx={{ color: 'text.disabled' }}
                        >
                           Date of Birth
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant="h6">Date Value</Typography>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell align="left">
                        <Typography
                           variant="h6"
                           sx={{ color: 'text.disabled' }}
                        >
                           Date of Birth
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant="h6">Date Value</Typography>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell align="left">
                        <Typography
                           variant="h6"
                           sx={{ color: 'text.disabled' }}
                        >
                           Date of Birth
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant="h6">Date Value</Typography>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell align="left">
                        <Typography
                           variant="h6"
                           sx={{ color: 'text.disabled' }}
                        >
                           Date of Birth
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant="h6">Date Value</Typography>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell align="left">
                        <Typography
                           variant="h6"
                           sx={{ color: 'text.disabled' }}
                        >
                           Date of Birth
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant="h6">Date Value</Typography>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell align="left">
                        <Typography
                           variant="h6"
                           sx={{ color: 'text.disabled' }}
                        >
                           Date of Birth
                        </Typography>
                     </TableCell>
                     <TableCell>
                        <Typography variant="h6">Date Value</Typography>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
            <IconWrapperStyle size="small">
               <FontAwesomeIcon icon={faPencilAlt} height={20} width={20} />
            </IconWrapperStyle>
         </Box>
      </Card>
   )
}

PersonalInfo.propTypes = {
   payroll: PropTypes.object,
}

export default PersonalInfo
