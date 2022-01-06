// import * as React from 'react'
import PropTypes from 'prop-types'
// material UI
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
// components
import PayrollMenu from './PayrollMenu'
import Label from '../../Label'

const MemberStand = (props) => {
   const { photoAvatar, name, email } = props
   return (
      <TableCell align="left">
         <Box>
            <Stack direction="row">
               <Avatar src={photoAvatar} />
               <Stack direction="column">
                  <Typography variant="h6">{name}</Typography>
                  <Typography
                     variant="subtitle2"
                     sx={{ color: 'text.disabled' }}
                  >
                     {email}
                  </Typography>
               </Stack>
            </Stack>
         </Box>
      </TableCell>
   )
}
MemberStand.propTypes = {
   photoAvatar: PropTypes.string,
   name: PropTypes.string,
   email: PropTypes.string,
}
const PeriodStand = (props) => {
   const { fromDate, toDate, periodType } = props
   return (
      <TableCell align="left">
         <Box>
            {periodType ? (
               <>
                  <Typography component="div" variant="h5">
                     {periodType}
                  </Typography>
                  <Typography
                     component="div"
                     variant="body2"
                     sx={{ color: 'text.disabled' }}
                  >
                     {fromDate} - {toDate}
                  </Typography>
               </>
            ) : (
               <Typography variant="h6" sx={{ color: 'text.disabled' }}>
                  {' '}
                  No Period
               </Typography>
            )}
         </Box>
      </TableCell>
   )
}
PeriodStand.propTypes = {
   fromDate: PropTypes.string,
   toDate: PropTypes.string,
   periodType: PropTypes.string,
}
const StatusStand = (props) => {
   const { status } = props
   return (
      <TableCell align="left">
         <Label
            variant="ghost"
            color={(status === 'inactive' && 'error') || 'success'}
         >
            {status}
         </Label>
      </TableCell>
   )
}
StatusStand.propTypes = {
   status: PropTypes.string,
}
const RateStand = (props) => {
   const { rateAmount, rateType } = props
   return (
      <TableCell align="left">
         <Box>
            <Typography component="div" variant="h6">
               {rateType}
            </Typography>
            <Typography
               component="div"
               variant="h6"
               sx={{ color: 'text.disabled' }}
            >
               {rateAmount}
            </Typography>
         </Box>
      </TableCell>
   )
}
RateStand.propTypes = {
   rateAmount: PropTypes.string,
   rateType: PropTypes.string,
}
const PayrolBody = (props) => {
   const { member } = props
   const {
      rateAmount,
      rateType,
      status,
      fromDate,
      toDate,
      periodType,
      email,
      name,
      photoAvatar,
   } = member
   return (
      <TableRow>
         <MemberStand photoAvatar={photoAvatar} name={name} email={email} />
         <PeriodStand
            fromDate={fromDate}
            toDate={toDate}
            periodType={periodType}
         />
         <RateStand rateAmount={rateAmount} rateType={rateType} />
         <StatusStand status={status} />
         <TableCell>
            <PayrollMenu />
         </TableCell>
      </TableRow>
   )
}
PayrolBody.propTypes = {
   member: PropTypes.object,
}

PayrolBody.propTypes = {}

export default PayrolBody
