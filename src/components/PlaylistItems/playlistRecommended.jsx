const PlaylistRecommended = ({ tracks }) => {
  return (
    <div className='pt-14 pb-10 flex flex-col gap-1'>
      <div className='pb-8'>
        <h1 className='text-2xl font-bold pb-2'>Recommended</h1>
        <span className='text-sm text-gray-400'>Based on what's in this playlist</span>
      </div>

      {
        tracks && tracks?.map((item, idx) => {
          return (
            <div className='text-gray-400 rounded-sm flex gap-4 justify-between items-center px-3 w-full group hover:bg-gray-700' key={idx} id={item?.track?.id}>
              <div className='flex items-center w-2/4'>
                <img src={item?.album?.images[0]?.url} width={36} height={36} alt={item?.album?.name} />

                <div className='flex flex-col w-52'>
                  <span className='text-white truncate ml-4'>{item?.name}</span>
                  <span className='truncate ml-4 group-hover:text-white' id={item?.track?.artists[0]?.id}>{item?.artists[0]?.name}</span>
                </div>
              </div>

              <span className='truncate w-2/4 group-hover:text-white' id={item?.album?.id}>{item?.album?.name}</span>

              <span className='w-16'>Add</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default PlaylistRecommended
