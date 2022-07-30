const getPlaylists = async ({ username, token }) => {
  const response = await fetch(`https://api.spotify.com/v1/users/${username}/playlists`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })

  const { items } = await response.json()

  return items
}

export default getPlaylists
