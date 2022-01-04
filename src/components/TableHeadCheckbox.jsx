import * as React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import Tooltip from '@mui/material/Tooltip'
// fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

// const TABLE_HEAD1 = [
//    { _id: 'name', label: 'Name', alignRight: false },
//    { _id: 'company', label: 'Company', alignRight: false },
//    { _id: 'role', label: 'Role', alignRight: false },
//    { _id: 'isVerified', label: 'Verified', alignRight: false },
//    { _id: 'status', label: 'Status', alignRight: false },
//    { _id: '' },
// ]
// const TABLE_HEAD = TABLE_HEAD1.filter((item) => item.label !== undefined)
const TableHeadCheckbox = (props) => {
   const ref = React.useRef(null)
   const [isOpen, setIsOpen] = React.useState(false)
   // const [selected, setSelected] = React.useState([])
   const { headLabel, selected, setSelected, onHandleClick } = props
   const filterHeadLabel = headLabel.filter((item) => item.label !== undefined)
   const numSelected = selected.length

   const handleSelectAllClick = (e) => {
      if (e.target.checked) {
         const newSelected = filterHeadLabel.map((th) => th.label)
         setSelected(newSelected)
         return
      }
      setSelected([])
   }
   return (
      <>
         <Tooltip title="Table Column">
            <IconButton
               ref={ref}
               onClick={() => setIsOpen(true)}
               sx={{ ml: 3, mt: 2 }}
            >
               <FontAwesomeIcon icon={faTasks} />
            </IconButton>
         </Tooltip>
         <Card>
            <Menu
               open={isOpen}
               anchorEl={ref.current}
               onClose={() => setIsOpen(false)}
               PaperProps={{
                  sx: { width: 200, maxWidth: '100%' },
               }}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}
               transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
               <MenuItem sx={{ color: 'text.secondary' }} disableRipple>
                  <FormControlLabel
                     control={
                        <Checkbox
                           indeterminate={
                              numSelected > 0 &&
                              numSelected !== filterHeadLabel.length
                           }
                           checked={
                              numSelected > 0 &&
                              numSelected === filterHeadLabel.length
                           }
                           onChange={
                              // handleSelectAllClick
                              handleSelectAllClick
                           }
                        />
                     }
                     label="All"
                  />
               </MenuItem>
               {filterHeadLabel.map((item) => {
                  const { label } = item
                  const isSelectedChecked = Boolean(
                     selected.indexOf(label) !== -1
                  )
                  return (
                     <MenuItem
                        disableRipple
                        role="checkbox"
                        selected={isSelectedChecked}
                        aria-checked={isSelectedChecked}
                        key={item._id}
                     >
                        <FormControlLabel
                           control={
                              <Checkbox
                                 checked={isSelectedChecked}
                                 onChange={
                                    // (e) => handleClick(e, label)
                                    (e) =>
                                       onHandleClick(
                                          e,
                                          label,
                                          selected,
                                          setSelected
                                       )
                                 }
                              />
                           }
                           label={item.label}
                        />
                     </MenuItem>
                  )
               })}
            </Menu>
         </Card>
      </>
   )
}

TableHeadCheckbox.propTypes = {
   headLabel: PropTypes.array,
   setSelected: PropTypes.func,
   selected: PropTypes.array,
   onHandleClick: PropTypes.func,
}

export default TableHeadCheckbox

// const handleSelectAllClick = (e) => {
//    if (e.target.checked) {
//       const newSelected = TABLE_HEAD.map((th) => th.label)
//       setSelected(newSelected)
//       return
//    }
//    setSelected([])
// }
// const handleClick = (e, label) => {
//    const selectedIndex = selected.indexOf(label)
//    let newSelected = []
//    if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, label)
//    } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1))
//    } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1))
//    } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//          selected.slice(0, selectedIndex),
//          selected.slice(selectedIndex + 1)
//       )
//    }
//    setSelected(newSelected)
// }
// React.useEffect(() => {
//    console.log('dkd')
// }, [selected])
