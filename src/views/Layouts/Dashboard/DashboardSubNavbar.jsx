import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const getIcon = (name) => <FontAwesomeIcon icon={name} width={22} height={22} />
const subNavConfig = [
   {
      title: 'dashboard',
      path: 'app',
      icon: getIcon(faCalendar),
   },
   {
      title: 'product',
      path: 'products',
      icon: getIcon(faCalendar),
   },
   {
      title: 'users',
      path: 'users',
      icon: getIcon(faCalendar),
   },
]
export default subNavConfig
