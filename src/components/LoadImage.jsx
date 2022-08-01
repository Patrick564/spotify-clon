import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const imageSizes = {
  'xl': '24',
  '2xl': '32'
}

const LoadImage = ({ loading, image, size }) => {
  if (loading) {
    return (
      <img
        className='rounded-full'
        src={image[0]?.url}
        width={imageSizes[size]}
        height={imageSizes[size]}
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

export default LoadImage
