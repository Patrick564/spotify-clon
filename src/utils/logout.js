import { useNavigate } from 'react-router-dom'

const logout = () => {
  const navigate = useNavigate()

  window.localStorage.removeItem('token')
  window.localStorage.removeItem('refreshToken')

  return navigate('/login')
}

export default logout
