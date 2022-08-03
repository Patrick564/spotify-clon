import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Playlists from '../components/Playlists'
import PlaylistItems from '../components/PlaylistItems'
import Navbar from '../components/Navbar'
import HomeMenu from '../components/HomeMenu'
// import Player from '../components/Player'

import useSetUser from '../hooks/useSetUser'

const Home = () => {
  const navigate = useNavigate()
  const user = useSetUser()
  const [display, setDisplay] = useState('home')
  const [playlist, setPlaylist] = useState('')

  const token = window.localStorage.getItem('token')

  const handleMenu = (event) => {
    setDisplay(!display)
  }

  const handleLoadPlaylist = (event) => {
    setPlaylist(event.target.id)
  }

  useEffect(() => {
    if (!token) { return navigate('/login') }
  }, [])

  return (
    <div className='relative grid grid-cols-[245px_3fr] grid-rows-[60px_3fr] h-screen'>
      {user && <Navbar username={user?.name} image={user?.images} />}

      {user && <Playlists username={user?.id} loadPlaylist={handleLoadPlaylist} changeMenu={handleMenu} />}

      {display && display === 'home' && <HomeMenu />}

      {playlist && <PlaylistItems playlistId={playlist} />}

      {/* <Player /> */}
    </div>
  )
}

export default Home
