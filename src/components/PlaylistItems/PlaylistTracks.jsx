import PlayIcon from '../PlayIcon'
import TimeSongIcon from '../TimeSongIcon'

const PlaylistTracks = ({ items, children }) => {
  return (
    <>
      <div className='sticky top-0 text-gray-400 backdrop-blur-lg border-b border-gray-600 flex justify-between gap-4 px-5 mb-4 pb-1 w-full'>
        <span className='w-7'>#</span>
        <span className='w-2/4'>TITLE</span>
        <span className='w-2/4'>ALBUM</span>
        <span className='w-16 pl-[17px]'><TimeSongIcon /></span>
      </div>
      {
        items && items?.map((song, idx) => {
          const item = song?.track ? song?.track : song

          const seconds = (((item?.duration_ms % 60000) / 1000).toFixed(0)).padStart(2, '0')
          const minutes = Math.floor(item?.duration_ms / 60000)

          return (
            <div className='text-gray-400 rounded-sm flex gap-4 justify-between items-center px-5 py-1 w-full group hover:bg-gray-700' key={idx} id={item?.id}>
              <span className='text-white'><PlayIcon /></span>

              <div className='flex items-center w-2/4'>
                <img src={item?.album?.images[0]?.url} width={36} height={36} alt={item?.album?.name} />
                <div className='flex flex-col w-52'>
                  <span className='text-white truncate ml-4'>{item?.name}</span>
                  <span className='truncate ml-4 group-hover:text-white' id={item?.artists[0]?.id}>{item?.artists[0]?.name}</span>
                </div>
              </div>

              <span className='truncate w-2/4 group-hover:text-white' id={item?.album?.id}>{item?.album?.name}</span>

              <span className='w-16'>{minutes}:{seconds}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default PlaylistTracks
