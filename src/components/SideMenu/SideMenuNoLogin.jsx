const SideMenuNoLogin = ({ active }) => {
  return (
    <div className={
      'text-white absolute rounded-lg bg-blue-600 top-40 left-48 p-5 w-80 z-50 before:border-blue-600 before:absolute before:border-t-[10px] before:border-t-transparent before:border-l-transparent before:border-b-[10px] before:border-b-transparent before:border-r-[10px] before:-left-2' + (active ? ' transition-all' : ' hidden')
    }>
      <h1 className='text-lg mb-3'>Enjoy Your Library</h1>

      <span className='text-xs text-gray-200'>Log in to see saved songs, podcasts, artists, and playlists in Your Library.</span>
    </div>
  )
}

export default SideMenuNoLogin
