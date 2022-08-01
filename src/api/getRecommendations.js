const getRecommendations = async ({ artist, token }) => {
  const response = await fetch(`https://api.spotify.com/v1/recommendations?seed_artists=0LlH6J1tj2TPq7AlwXAkY5`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })
  // console.log(await response.json())

  const { tracks } = await response.json()

  return tracks
}

export default getRecommendations
