import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const LoadingIcon = ({ size }) => {
  return (
    <FontAwesomeIcon icon={faCircleNotch} size={size} className='text-white fa-spin' />
  )
}

export default LoadingIcon
