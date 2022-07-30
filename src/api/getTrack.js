const getTrack = async ({ trackId, token }) => {
  const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()

  return data
}

export default getTrack
