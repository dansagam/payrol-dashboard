import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const ExpenseListCard = ({ expense }) => {
   const { expenseAmount, expenseRefNumber } = expense
   return (
      <Card>
         <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
         >
            <Box component="div">
               <Typography component="p" variant="h2">
                  {'customerName'}
               </Typography>
               <Link
                  to="#"
                  color="inherit"
                  underline="hover"
                  component={RouterLink}
               >
                  <Typography component="h2" variant="body2">
                     {expenseRefNumber}
                  </Typography>
               </Link>
            </Box>
            <Box component="div">
               <Typography component="p" variant="h2">
                  <Typography component="span" variant="h2">
                     $
                  </Typography>
                  {expenseAmount}
               </Typography>
               <Typography component="h2" variant="body2">
                  {'dueStatus'}
               </Typography>
            </Box>
         </Stack>
      </Card>
   )
}

ExpenseListCard.propTypes = {
   expense: PropTypes.object,
}

export default ExpenseListCard
