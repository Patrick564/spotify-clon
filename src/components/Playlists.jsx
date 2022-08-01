import useSetPlaylists from '../hooks/useSetPlaylists'
import LoadImage from './LoadImage'

const Playlists = ({ username, loadPlaylist }) => {
  const playlists = useSetPlaylists({ username })

  return (
    <section className='bg-black col-start-1 row-start-1 flex flex-col h-screen pt-16 p-5'>
      <h1 className='text-white'>Playlists</h1>

      <div className='flex flex-col gap-3'>
        {
          playlists && playlists.map((playlist) => {
            return (
              <div className='flex flex-row gap-2' id={playlist?.id} key={playlist?.id} onClick={loadPlaylist}>
                <LoadImage loading={Boolean(playlist?.images?.length)} image={playlist?.images} size={'xl'} />

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
