const getPlaylist = async ({ playlistId, token }) => {
  const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  return data
}

export default getPlaylist
