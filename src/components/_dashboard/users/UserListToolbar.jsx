// fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import FilterListIcon from '@mui/icons-material/FilterList'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import PropTypes from 'prop-types'

const RootStyles = styled(Toolbar)(({ theme }) => ({
   height: 96,
   display: 'flex',
   justifyContent: 'space-between',
   padding: theme.spacing(0, 1, 0, 3),
}))
const SearchStyles = styled(OutlinedInput)(({ theme }) => ({
   width: 50,
   transition: theme.transitions.create(['box-shadow', 'width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
   }),
   '& .MuiOutlinedInput-input': {
      width: 0,
   },
   '&:hover': {
      width: 240,
      '& .MuiOutlinedInput-input': {
         width: '100%',
      },
   },
   '&.Mui-focused': {
      width: 320,
      boxShadow: theme.customShadows.z8,
      '& .MuiOutlinedInput-input': {
         width: '100%',
      },
   },
   '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
   },
}))
const UserListToolbar = (props) => {
   const { numSelected, filterName, onFilterName } = props
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
            <SearchStyles
               value={filterName}
               onChange={onFilterName}
               placeholder="Search user..."
               startAdornment={
                  <InputAdornment position="start">
                     <Box
                        component={FontAwesomeIcon}
                        icon={faSearch}
                        sx={{
                           color: 'text.disabled',
                        }}
                     />
                  </InputAdornment>
               }
            />
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

UserListToolbar.propTypes = {
   numSelected: PropTypes.number.isRequired,
   filterName: PropTypes.string,
   onFilterName: PropTypes.func,
}
export default UserListToolbar
