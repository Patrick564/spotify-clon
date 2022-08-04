import { Link } from 'react-router-dom'

const GridContainer = ({ children, content }) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center gap-5 pb-10'>
      {children}

      {
        content && content?.map((playlist, index) => {
          return (
            <Link
              className='bg-gray-800 flex flex-col gap-2 rounded-lg w-fit h-full p-5 hover:bg-gray-700 transition-all cursor-pointer'
              key={index}
              to={`/playlists/${ playlist?.id }`}
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
  )
}

export default GridContainer
