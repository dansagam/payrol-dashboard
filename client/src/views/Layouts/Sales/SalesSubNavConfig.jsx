import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const getIcon = (name) => <FontAwesomeIcon icon={name} width={22} height={22} />
const subNavConfig = [
   {
      title: 'overview',
      path: 'overview',
      icon: getIcon(faCalendar),
   },
   {
      title: 'customers',
      path: 'customers',
      icon: getIcon(faCalendar),
   },
   {
      title: 'invoices',
      path: 'invoices',
      icon: getIcon(faCalendar),
   },
   {
      title: 'deposits',
      path: 'deposits',
      icon: getIcon(faCalendar),
   },
]
export default subNavConfig
