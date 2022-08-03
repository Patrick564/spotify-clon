const getTopItems = async ({ token }) => {
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })
  console.log(await response.json())
  const { items } = await response.json()

  return items
}

export default getTopItems
