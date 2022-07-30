import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import LoginSpotifyButton from '../components/LoginButton'

const LoginLayout = () => {
  let navigate = useNavigate()
  let accessToken = window.localStorage.getItem('token')

  useEffect(() => {
    console.log(accessToken)
    if (accessToken) {
      return navigate('/')
    }
  }, [])

  return (
    <div className='border-blue-500 border'>
      <h1>Login to App</h1>

      <LoginSpotifyButton />
    </div>
  )
}

export default LoginLayout
