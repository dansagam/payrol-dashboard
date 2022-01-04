import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { filter } from 'lodash'
// icon from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
// components
import Page from '../../../components/Page'
import Scrollbar from '../../../components/Scrollbar'
import {
   UserListHeader,
   UserListBody,
   UserListToolbar,
} from '../../../components/_dashboard/users'
import USERS from '../../../_mocks_/customers'
import TableHeadCheckbox from '../../../components/TableHeadCheckbox'

const TABLE_HEAD = [
   { _id: 'name', label: 'Name', alignRight: false },
   { _id: 'company', label: 'Company', alignRight: false },
   { _id: 'role', label: 'Role', alignRight: false },
   { _id: 'isVerified', label: 'Verified', alignRight: false },
   { _id: 'status', label: 'Status', alignRight: false },
   { _id: '' },
]

const descendingComparator = (a, b, orderBy) => {
   if (a[orderBy] < b[orderBy]) {
      return -1
   }
   if (a[orderBy] < b[orderBy]) {
      return 1
   }
   // a must be equal to b
   return 0
}

const getComparator = (order, orderBy) =>
   order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
const applySortFilter = (array, comparator, query) => {
   // returns [ Array(2)] where the [{...}, index]
   const stabilisedThis = array.map((el, index) => [el, index])
   stabilisedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      // when order === 0 sort by index
      return a[1] - b[1]
   })
   if (query) {
      return filter(
         array,
         (user) => user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
   }
   return stabilisedThis.map((el) => el[0])
}
const Users = () => {
   const navigate = useNavigate()
   const [page, setPage] = React.useState(0)
   const [selected, setSelected] = React.useState([])
   const [thSelected, setThSelected] = React.useState([])
   const [order, setOrder] = React.useState('asc')
   const [orderBy, setOrderBy] = React.useState('')
   const [filterName, setFilterName] = React.useState('')
   const [rowsPerPage, setRowsPerPage] = React.useState(5)
   const handleNewUserButton = () => {
      navigate('#')
   }
   const handleRequestSort = (e, property) => {
      const isAsc = orderBy === property && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(property)
   }
   const handleSelectAllClick = (e) => {
      if (e.target.checked) {
         const numSelected = USERS.map((user) => user.name)
         setSelected(numSelected)
         return
      }
      setSelected([])
   }

   const handleFilterByName = (event) => {
      setFilterName(event.target.value)
   }
   const handleClick1 = (e, name, varSelected, varSetSeleted) => {
      const selectedIndex = varSelected.indexOf(name)
      let newSelected = []
      if (selectedIndex === -1) {
         newSelected = newSelected.concat(varSelected, name)
      } else if (selectedIndex === 0) {
         newSelected = newSelected.concat(varSelected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
         newSelected = newSelected.concat(varSelected.slice(0, -1))
      } else if (selectedIndex > 0) {
         newSelected = newSelected.concat(
            varSelected.slice(0, selectedIndex),
            varSelected.slice(selectedIndex + 1)
         )
      }
      varSetSeleted(newSelected)
   }
   const handleClick = (e, name) => {
      const selectedIndex = selected.indexOf(name)
      let newSelected = []
      if (selectedIndex === -1) {
         newSelected = newSelected.concat(selected, name)
      } else if (selectedIndex === 0) {
         newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
         newSelected = newSelected.concat(selected.slice(0, -1))
      } else if (selectedIndex > 0) {
         newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
         )
      }
      setSelected(newSelected)
   }
   const handlePageChange = (e, newPage) => {
      setPage(newPage)
   }
   const handleRowsPerPageChange = (e) => {
      setRowsPerPage(parseInt(e.target.value, 10))
      setPage(0)
   }
   const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERS.length) : 0

   const filteredUsers = applySortFilter(
      USERS,
      getComparator(order, orderBy),
      filterName
   )

   const isUserNotFound = filteredUsers.length === 0
   return (
      <Page title="User List">
         <Container>
            <Stack
               direction="row"
               alignItems="center"
               justifyContent="space-between"
               mb={5}
            >
               <Typography variant="h4" gutterBottom>
                  User List
               </Typography>
               <Button
                  variant="outlined"
                  startIcon={<FontAwesomeIcon icon={faPlus} />}
                  onClick={handleNewUserButton}
               >
                  New User
               </Button>
            </Stack>
            <Card>
               <UserListToolbar
                  filterName={filterName}
                  onFilterName={handleFilterByName}
               />
               <TableHeadCheckbox
                  headLabel={TABLE_HEAD}
                  selected={thSelected}
                  setSelected={setThSelected}
                  onHandleClick={handleClick1}
               />
               <Scrollbar>
                  <TableContainer sx={{ minWidth: 800 }}>
                     <Table size="small" aria-label="a dense table">
                        <UserListHeader
                           order={order}
                           orderBy={orderBy}
                           rowCount={USERS.length}
                           headLabel={TABLE_HEAD}
                           numSelected={selected.length}
                           onRequestSort={handleRequestSort}
                           onSelectAllClick={handleSelectAllClick}
                        />
                        <TableBody>
                           {filteredUsers
                              .slice(
                                 page * rowsPerPage,
                                 page * rowsPerPage + rowsPerPage
                              )
                              .map((userRow) => (
                                 <UserListBody
                                    user={userRow}
                                    key={userRow._id}
                                    selected={selected}
                                    handleClick={handleClick}
                                 />
                              ))}
                           {emptyRows > 0 && (
                              <TableRow sx={{ height: 53 * emptyRows }}>
                                 <TableCell colSpan={TABLE_HEAD.length} />
                              </TableRow>
                           )}
                        </TableBody>
                        {isUserNotFound && (
                           <TableBody>
                              <TableRow>
                                 <TableCell
                                    align="center"
                                    colSpan={TABLE_HEAD.length}
                                    sx={{ py: 3 }}
                                 >
                                    SearchNoTFound
                                 </TableCell>
                              </TableRow>
                           </TableBody>
                        )}
                     </Table>
                  </TableContainer>
               </Scrollbar>
               <TablePagination
                  component="div"
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleRowsPerPageChange}
                  rowsPerPageOptions={[5, 10, 25]}
                  count={USERS.length}
                  page={page}
                  onPageChange={handlePageChange}
               />
            </Card>
         </Container>
      </Page>
   )
}

export default Users
