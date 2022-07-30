import { useEffect, useState } from 'react'

import getPlaylists from '../api/getPlaylists'

const Playlists = ({ username, token, loadPlaylist }) => {
  const [playlists, setPlaylists] = useState()

  useEffect(() => {
    const getUserPlaylists = async () => {
      setPlaylists(await getPlaylists({ username, token }))
    }

    getUserPlaylists()
  }, [username])

  return (
    <section className='bg-black col-start-1 row-start-1 flex flex-col h-screen pt-16 p-5'>
      <h1 className='text-white'>Playlists</h1>

      <div className='flex flex-col gap-3'>
        {
          playlists && playlists.map((playlist) => {
            return (
              <div className='flex flex-row gap-2' id={playlist?.id} key={playlist?.id} onClick={loadPlaylist}>
                <img className='pointer-events-none' src={playlist?.images[0]?.url} width={24} height={24} alt={playlist?.name} />

                <span className='text-white pointer-events-none'>{playlist?.name}</span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Playlists
