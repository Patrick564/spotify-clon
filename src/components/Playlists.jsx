import { useState } from 'react'

import { Link } from 'react-router-dom'

import useSetPlaylists from '../hooks/useSetPlaylists'

import HomeIcon from './HomeIcon'
import LibraryIcon from './LibraryIcon'
import LoadImage from './LoadImage'
import LogoIcon from './LogoIcon'
import SearchIcon from './SearchIcon'

const Playlists = ({ username, loadPlaylist, changeMenu }) => {
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
        <Link to={'/'} className='flex gap-5 cursor-pointer hover:text-white' onClick={changeMenu}>
          <HomeIcon />
          <h1>Home</h1>
        </Link>

        <Link to={'/search'} className='flex gap-5 cursor-pointer hover:text-white'>
          <SearchIcon />
          <h1>Search</h1>
        </Link>

        <Link to={'/playlists'} className='flex gap-5 cursor-pointer hover:text-white'>
          <LibraryIcon />
          <h1>Your Library</h1>
        </Link>
      </div>

      <div className='flex flex-col gap-3'>
        {
          playlists && playlists.map((playlist) => {
            return (
              <Link
                to={`/playlists/${playlist.id}`}
                className={'cursor-pointer hover:text-white flex flex-row gap-2 ' + (selected === playlist?.id ? 'text-white' : '')}
                id={playlist?.id}
                key={playlist?.id}
                onClick={handleSelected}>
                <span className='pointer-events-none text-sm'>{playlist?.name}</span>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default Playlists
