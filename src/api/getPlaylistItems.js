const getPlaylistItems = async ({ playlistId, token }) => {
  const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  const { items } = await response.json()

  return items
}

export default getPlaylistItems
