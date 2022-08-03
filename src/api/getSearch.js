const types = {
  'all': 'artist,album,track',
  'playlists': 'playlist',
  'artists': 'artist',
  'albums': 'album',
  'songs': 'track'
}

const getSearch = async ({ query, type, token }) => {
  const response = await fetch(`https://api.spotify.com/v1/search?limit=5&type=${types[type]}&q=${query}`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })

  const { albums, artists, tracks, playlists } = await response.json()

  return { albums, artists, tracks, playlists }
}

export default getSearch
