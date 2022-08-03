import { Link } from 'react-router-dom'

const SideMenuPlaylists = ({ playlists, selected }) => {
  return (
    <div className='flex flex-col gap-3'>
      {
        playlists?.map((playlist) => {
          return (
            <Link
              to={`/playlists/${playlist.id}`}
              className={'cursor-pointer hover:text-white flex flex-row gap-2 ' + (selected === playlist?.id ? 'text-white' : '')}
              id={playlist?.id}
              key={playlist?.id}
            >
              <span className='pointer-events-none text-sm'>{playlist?.name}</span>
            </Link>
          )
        })
      }
    </div>
  )
}

export default SideMenuPlaylists
