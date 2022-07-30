import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginSpotifyButton = () => {
  let navigate = useNavigate()
  let accessToken = window.localStorage.getItem('token')

  useEffect(() => {
    const queryset = window.location.search
    const urlParams = new URLSearchParams(queryset)

    if (!accessToken && urlParams.has('token')) {
      accessToken = urlParams.get('token')
      let refreshToken = urlParams.get('refresh_token')

      window.location.search = ''
      window.localStorage.setItem('token', accessToken)
      window.localStorage.setItem('refreshToken', refreshToken)

      console.log(accessToken)
      return navigate('/')
    }
  }, [accessToken])

  return (
    <a href='https://spotify-clon-api.up.railway.app/api/login'>
      Login with Spotify
    </a>
  )
}

export default LoginSpotifyButton
