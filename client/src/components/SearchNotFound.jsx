import PropTypes from 'prop-types'
// material
import Paper from '@mui/material/Paper'
// material
import Typography from '@mui/material/Typography'

const SearchNotFound = ({ searchQuery = '', ...other }) => (
   <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
         Not found
      </Typography>
      <Typography variant="body2" align="center">
         No results found for &nbsp;
         <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
         using complete words.
      </Typography>
   </Paper>
)

SearchNotFound.propTypes = {
   searchQuery: PropTypes.string,
}

export default SearchNotFound
