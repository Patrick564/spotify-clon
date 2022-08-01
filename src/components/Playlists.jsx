import useSetPlaylists from '../hooks/useSetPlaylists'
import HomeIcon from './HomeIcon'
import LibraryIcon from './LibraryIcon'
import LoadImage from './LoadImage'
import SearchIcon from './SearchIcon'

const Playlists = ({ username, loadPlaylist }) => {
  const playlists = useSetPlaylists({ username })

  return (
    <section className='bg-black text-white col-start-1 row-start-1 flex flex-col h-screen pt-16 p-5'>
      <div className='flex flex-col gap-4 border-b border-gray-800 mb-4 pb-4'>
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
              <div className='flex flex-row gap-2' id={playlist?.id} key={playlist?.id} onClick={loadPlaylist}>
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
