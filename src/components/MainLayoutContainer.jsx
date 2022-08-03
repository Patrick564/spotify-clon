const MainLayoutContainer = ({ children }) => {
  return (
    <div className='relative grid grid-cols-[245px_3fr] grid-rows-[60px_3fr] h-screen'>
      {children}
    </div>
  )
}

export default MainLayoutContainer
