import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const PlaylistCover = ({ loading, image, size}) => {
  if (loading) {
    return (
      <img
        className='shadow-xl shadow-gray-900'
        src={image[0]?.url}
        alt='Profile picture'
      />
    )
  }

  return (
    <FontAwesomeIcon
      icon={faCircleNotch}
      size={size}
      className='text-white fa-spin'
    />
  )
}

export default PlaylistCover
