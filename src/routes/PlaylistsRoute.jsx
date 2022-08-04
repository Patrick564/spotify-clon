import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MenuContainer from '../components/Containers/MenuContainer'

import getSavedTracks from '../api/getSavedTracks'
import getPlaylists from '../api/getPlaylists'

const PlaylistsRoute = () => {
  const [savedTracks, setSavedTracks] = useState()
  const [userPlaylists, setUserPlaylists] = useState()

  const token = window.localStorage.getItem('token')

  useEffect(() => {
    const fetchSavedTracks = async () => {
      setSavedTracks(await getSavedTracks({ token }))
    }

    const fetchUserPlaylists = async () => {
      setUserPlaylists(await getPlaylists({ token }))
    }

    fetchSavedTracks()
    fetchUserPlaylists()
  }, [token])

  console.log(userPlaylists)

  return (
    <MenuContainer>
      <h1 className='text-2xl font-bold mt-5 mb-3'>Playlists</h1>

      <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center gap-5 pb-10'>
        <div className='rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-violet-700 col-span-2 max-h-full p-5'>
          <div className='font-semibold flex items-center h-36'>
            <div className='line-clamp-3 h-auto'>
              {savedTracks && savedTracks?.items?.map((track, index) => {
                return (
                  <span>
                    <span>{track?.track?.artists[0]?.name} <span className='text-gray-400 ml-0.5'>{track?.track?.name}</span></span>
                    <span> ° </span>
                  </span>
                )
              })}
            </div>
          </div>
          <h2 className='text-4xl font-bold mb-3'>Liked Songs</h2>
          <span className='pb-5'>{savedTracks?.total} liked songs</span>
        </div>

        {
          userPlaylists && userPlaylists?.map((playlist, index) => {
            return (
              <Link
                className='bg-gray-800 flex flex-col gap-2 rounded-lg w-fit h-full p-5 hover:bg-gray-700 transition-all cursor-pointer'
                key={index}
                to={`/playlists/${playlist?.id}`}
              >
                <div className='rounded-lg w-full max-w-[190px]'>
                  <img className='object-cover rounded-md' src={playlist?.images[0]?.url} alt="" />
                </div>

                <div className='font-bold text-left w-full'>
                  {playlist?.name}
                </div>

                <span className='text-left text-gray-400 w-full'>{playlist?.tracks?.total} songs</span>
              </Link>
            )
          })
        }
      </div>
    </MenuContainer>
  )
}

export default PlaylistsRoute
