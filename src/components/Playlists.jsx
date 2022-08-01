import { useState } from 'react'

import useSetPlaylists from '../hooks/useSetPlaylists'

import HomeIcon from './HomeIcon'
import LibraryIcon from './LibraryIcon'
import LoadImage from './LoadImage'
import LogoIcon from './LogoIcon'
import SearchIcon from './SearchIcon'

const Playlists = ({ username, loadPlaylist }) => {
  const playlists = useSetPlaylists({ username })
  const [selected, setSelected] = useState('')

  const handleSelected = (e) => {
    setSelected(e.target.id)
    loadPlaylist(e)
  }

  return (
    <section className='bg-black text-gray-400 col-start-1 row-start-1 flex flex-col h-screen p-5'>
      <div className='text-white flex items-center gap-2 mb-9'>
        <LogoIcon size={'3x'} />
        <h1 className='text-2xl font-bold'>Musi-fai</h1>
      </div>

      <div className='text-sm font-bold flex flex-col gap-4 border-b border-gray-800 mb-4 pb-4'>
        <div className='flex gap-5'>
          <HomeIcon />
          <h1>Home</h1>
        </div>

        <div className='flex gap-5'>
          <SearchIcon />
          <h1>Search</h1>
        </div>

        <div className='flex gap-5'>
          <LibraryIcon />
          <h1>Your Library</h1>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        {
          playlists && playlists.map((playlist) => {
            return (
              <div
                className={'flex flex-row gap-2 ' + (selected === playlist?.id ? 'text-white' : '')}
                id={playlist?.id}
                key={playlist?.id}
                onClick={handleSelected}>
                <span className='pointer-events-none text-sm'>{playlist?.name}</span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Playlists
