import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import getUserInfo from '../api/getUserInfo'

const useSetUser = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    id: '',
    images: [],
  })

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    const setUserData = async () => {
      try {
        setUser(await getUserInfo({ token }))
      } catch (error) {
        if (error.message === 'The access token expired') {
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('refreshToken')

          return navigate('/login')
        }
      }
    }

    if (!user.name) {
      setUserData()
    }

  }, [token])

  return user
}

export default useSetUser
