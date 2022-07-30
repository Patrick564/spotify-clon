// import { URLSearchParams } from 'url'

const getAccessToken = async ({ userToken }) => {
  const response = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ZWNlMzZjMDRjNjI5NDNiMDgwYjI1OTc1Njk2NmQ4MDQ6MGNjYTJmNTNkNzJlNDg4N2JlYTEzNTIwM2Q1OWY1Yzc=`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'grant_type': 'client_credentials',
      'code': userToken,
      'redirect_uri': import.meta.env.VITE_SPOTIFY_REDIRECT_URI
    }
  })

  console.log('aaaaa', await response.json())

  return response.json()
}

export default getAccessToken
