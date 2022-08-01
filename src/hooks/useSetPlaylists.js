import { useState, useEffect } from 'react'

import getPlaylists from '../api/getPlaylists'

const useSetPlaylists = ({ username }) => {
  const [playlists, setPlaylists] = useState('')

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    const setPlaylistsData = async () => {
      setPlaylists(await getPlaylists({ username, token }))
    }

    if (!playlists) {
      setPlaylistsData()
    }
  }, [username])

  return playlists
}

export default useSetPlaylists
