// import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

const RootStyles = styled(Toolbar)(({ theme }) => ({
   height: 90,
   display: 'flex',
   justifyContent: 'space-between',
   padding: theme.spacing(0, 1, 0, 3),
}))
const SearchbarStyles = styled(OutlinedInput)(({ theme }) => ({
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
const EmployeeTableToolbar = (props) => {
   const { filterName, onFilterName } = props
   return (
      <RootStyles>
         <SearchbarStyles
            value={filterName}
            onChange={onFilterName}
            placeholder="Search payroll"
            startAdornment={
               <InputAdornment>
                  <Box
                     component={FontAwesomeIcon}
                     icon={faSearch}
                     sx={{ color: 'text.disabled' }}
                  />
               </InputAdornment>
            }
         />
         <Button variant="outlined">
            <Typography variant="h4">Add member to payroll</Typography>
         </Button>
      </RootStyles>
   )
}

EmployeeTableToolbar.propTypes = {
   filterName: PropTypes.string,
   onFilterName: PropTypes.func,
}

export default EmployeeTableToolbar
