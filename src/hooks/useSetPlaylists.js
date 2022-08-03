import { useState, useEffect } from 'react'

import getPlaylists from '../api/getPlaylists'

const useSetPlaylists = () => {
  const [playlists, setPlaylists] = useState('')

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    const setPlaylistsData = async () => {
      setPlaylists(await getPlaylists({ token }))
    }

    if (!playlists) {
      setPlaylistsData()
    }
  }, [])

  return playlists
}

export default useSetPlaylists
