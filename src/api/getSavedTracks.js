const getSavedTracks = async ({ query, type, token }) => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })

  const { items, total } = await response.json()

  return { items, total }
}

export default getSavedTracks
