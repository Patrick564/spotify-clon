import { useState } from 'react'

import useSetPlaylists from '../../hooks/useSetPlaylists'

import LogoIcon from '../LogoIcon'

import SideMenuOptions from './SideMenuOptions'
import SideMenuPlaylists from './SideMenuPlaylists'

const SideMenu = ({ loadPlaylist }) => {
  const playlists = useSetPlaylists()
  const [selected, setSelected] = useState('')

  return (
    <section className='bg-black text-gray-400 col-start-1 row-start-1 flex flex-col h-screen p-5'>
      <div className='text-white flex items-center gap-2 mb-9'>
        <LogoIcon size={'3x'} />
        <h1 className='text-2xl font-bold'>Musi-fai</h1>
      </div>

      <SideMenuOptions selected={selected} />

      {playlists && (
        <SideMenuPlaylists
          playlists={playlists}
          selected={selected}
        />
      )}
    </section>
  )
}

export default SideMenu
