const getUserInfo = async ({ token }) => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  })

  if (response.status === 401) {
    const { error } = await response.json()

    if (error.message === 'The access token expired') {
      throw new Error('The access token expired', )
    }
  }

  // console.log(await response.json());

  const { display_name: name, email, id, images } = await response.json()

  return { name, email, id, images }
}

export default getUserInfo
