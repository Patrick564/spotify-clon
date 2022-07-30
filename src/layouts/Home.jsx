import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Playlists from '../components/Playlists'
import PlaylistItems from '../components/PlaylistItems'
import Navbar from '../components/Navbar'
// import Player from '../components/Player'

import getUserInfo from '../api/getUserInfo'

const Home = () => {
  const [playlist, setPlaylist] = useState('')
  const [user, setUser] = useState({
    name: '',
    email: '',
    images: '',
    id: '',
  })

  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')

  const handleLoadPlaylist = async (e) => {
    setPlaylist(e.target.id)
  }

  useEffect(() => {
    const setUserData = async () => {
      try {
        setUser(await getUserInfo({ token }))
      } catch (error) {
        if (error.message === 'The access token expired') {
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('refreshToken')

          navigate('/login')
        }
        console.log(error)
      }
    }

    // if (!token) {
    //   return navigate('/login')
    // }

    setUserData()
  }, [])

  return (
    <div className='relative grid grid-cols-[1fr_3fr] grid-rows-[60px_3fr] h-screen'>
      {user && <Navbar username={user?.name} image={user?.images} />}

      {user && <Playlists username={user?.id} token={token} loadPlaylist={handleLoadPlaylist} />}

      {playlist && <PlaylistItems playlistId={playlist} />}

      {/* <Player /> */}
    </div>
  )
}

export default Home
