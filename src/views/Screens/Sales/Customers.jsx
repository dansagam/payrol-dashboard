import * as React from 'react'
import { filter } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import {
   CustomerListHeader,
   CustomerListToolbar,
   CustomerListBody,
} from '../../../components/_sales/customers'
import Page from '../../../components/Page'
import Scrollbar from '../../../components/Scrollbar'
import customers from '../../../_mocks_/customers'

const TABLE_HEAD = [
   { _id: 'name', label: 'Name', alignRight: false },
   { _id: 'address', label: 'Address', alignRight: false },
   { _id: 'phonenumber', label: 'Phone Number', alignRight: false },
   { _id: 'activeStatus', label: 'Status', alignRight: false },
   { _id: 'city', label: 'City', alignRight: false },
   { _id: 'state', label: 'State', alignRight: false },
   { _id: '' },
]
const descendingComparator = (a, b, orderBy) => {
   if (b[orderBy] < a[orderBy]) {
      return -1
   }
   if (b[orderBy] > a[orderBy]) {
      return 1
   }
   return 0
}

const getComparator = (order, orderBy) =>
   order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)

const applySortFilter = (array, comparator, query) => {
   const stabilizedThis = array.map((el, index) => [el, index])
   stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
   })
   if (query) {
      return filter(
         array,
         (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
   }
   return stabilizedThis.map((el) => el[0])
}

const Customers = () => {
   const navigate = useNavigate()
   const [selected, setSelected] = React.useState([])
   const [order, setOrder] = React.useState('asc')
   const [orderBy, setOrderBy] = React.useState('name')
   const [filterName, setFilterName] = React.useState('')
   const [page, setPage] = React.useState(0)
   const [rowsPerPage, setRowsPerPage] = React.useState(5)

   const handleButtonClick = () => {
      navigate('#')
   }
   const handleRequestSort = (e, property) => {
      const isAsc = orderBy === property && order === 'asc'
      setOrder(isAsc ? 'desc' : 'asc')
      setOrderBy(property)
   }
   const handleSelectAllClick = (e) => {
      if (e.target.checked) {
         const newSelecteds = customers.map((n) => n.name)
         setSelected(newSelecteds)
         return
      }
      setSelected([])
   }

   const handleChangePage = (event, newPage) => {
      setPage(newPage)
   }

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setPage(0)
   }

   const handleClick = (event, name) => {
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
         // newSelected.concat(selected, name)
      }
      setSelected(newSelected)
   }
   const handleFilterByName = (e) => {
      setFilterName(e.target.value)
   }
   const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customers.length) : 0
   const filteredCustomers = applySortFilter(
      customers,
      getComparator(order, orderBy),
      filterName
   )
   const isCustomerFound = filteredCustomers.length === 0
   return (
      <Page title="Customers">
         <Container>
            <Stack
               direction="row"
               alignItems="center"
               justifyContent="space-between"
               mb={5}
            >
               <Typography variant="h4" gutterBottom>
                  Customer List
               </Typography>
               <Button
                  variant="contained"
                  onClick={handleButtonClick}
                  startIcon={<FontAwesomeIcon icon={faPlus} />}
               >
                  New Customer
               </Button>
            </Stack>
            <Card>
               <CustomerListToolbar
                  numSelected={selected.length}
                  filterName={filterName}
                  onFilterName={handleFilterByName}
               />
               <Scrollbar>
                  <TableContainer>
                     <Table>
                        <CustomerListHeader
                           order={order}
                           orderBy={orderBy}
                           rowCount={customers.length}
                           headLabel={TABLE_HEAD}
                           numSelected={selected.length}
                           onRequestSort={handleRequestSort}
                           onSelectAllClick={handleSelectAllClick}
                        />
                        <TableBody>
                           {filteredCustomers
                              .slice(
                                 page * rowsPerPage,
                                 page * rowsPerPage + rowsPerPage
                              )
                              .map((customer) => (
                                 <CustomerListBody
                                    key={customer._id}
                                    customer={customer}
                                    handleClick={handleClick}
                                    selected={selected}
                                 />
                              ))}
                           {emptyRows > 0 && (
                              <TableRow sx={{ height: 53 * emptyRows }}>
                                 <TableCell colSpan={TABLE_HEAD.length} />
                              </TableRow>
                           )}
                        </TableBody>
                        {isCustomerFound && (
                           <TableBody>
                              <TableRow>
                                 <TableCell
                                    align="center"
                                    colSpan={TABLE_HEAD.length}
                                    sx={{ py: 3 }}
                                 >
                                    SearchNotFOund
                                 </TableCell>
                              </TableRow>
                           </TableBody>
                        )}
                     </Table>
                  </TableContainer>
               </Scrollbar>
               <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={customers.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
               />
            </Card>
         </Container>
      </Page>
   )
}

export default Customers
