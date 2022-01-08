import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const getIcon = (name) => <FontAwesomeIcon icon={name} width={22} height={22} />
const subNavConfig = [
   {
      title: 'testing',
      path: 'user',
      icon: getIcon(faCalendar),
   },
]
export default subNavConfig
