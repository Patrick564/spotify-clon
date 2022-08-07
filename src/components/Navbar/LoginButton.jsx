import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const loginUrl = import.meta.env.VITE_LOGIN_URI

const LoginButton = () => {
  let navigate = useNavigate()

  let accessToken = window.localStorage.getItem('token')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    if (!accessToken && urlParams.has('token')) {
      accessToken = urlParams.get('token')
      let refreshToken = urlParams.get('refresh_token')

      window.location.search = ''
      window.localStorage.setItem('token', accessToken)
      window.localStorage.setItem('refreshToken', refreshToken)

      return navigate('/')
    }
  }, [accessToken])

  return (
    <a className='rounded-full bg-white text-black p-4 flex justify-center items-center font-bold cursor-pointer hover:scale-110' href={loginUrl}>
      Login
    </a>
  )
}

export default LoginButton
