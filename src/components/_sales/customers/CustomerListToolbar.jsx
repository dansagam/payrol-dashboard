import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'

const RootStyles = styled(Toolbar)(({ theme }) => ({
   height: 96,
   display: 'flex',
   justifyContent: 'space-between',
   padding: theme.spacing(0, 1, 0, 3),
}))
const CustomerListToolbar = (props) => {
   const { numSelected } = props
   return (
      <RootStyles
         sx={{
            ...(numSelected > 0 && {
               color: 'primary.main',
               bgcolor: 'primary.lighter',
            }),
         }}
      >
         {numSelected > 0 ? (
            <Typography variant="subtitle2" component="div">
               {numSelected} selected
            </Typography>
         ) : (
            <Typography component="div" variant="h6">
               Customer List
            </Typography>
         )}
         {numSelected > 0 ? (
            <Tooltip title="Delete">
               <IconButton>
                  <DeleteIcon />
               </IconButton>
            </Tooltip>
         ) : (
            <Tooltip title="Filter List">
               <IconButton>
                  <FilterListIcon />
               </IconButton>
            </Tooltip>
         )}
      </RootStyles>
   )
}
CustomerListToolbar.propTypes = {
   numSelected: PropTypes.number.isRequired,
}
export default CustomerListToolbar
