import MenuContainer from '../components/Containers/MenuContainer'

const HomeRoute = () => {
  return (
    <MenuContainer>
      <div className='self-center mt-20'>
        <div className='max-w-xl'>
          <p>Hi! and welcome to my project of clon (just for fun) the Spotify Web Player</p>
          <p>I'm using the Spotify API to get the top tracks and the current playlist of the user,</p>
          <p>React Hooks to get the user token and the current playlist and,</p>
          <p>React Router to navigate between the pages.</p>
        </div>

        <div className='max-w-xl'>
          <p>If you don't see your information, is maybe because this is an Development App as Spotify dashboard says.</p>
          <p>If you want to see the source code, you can check it on <a href=''>Github</a>.</p>
          <p>Feel free to clone this project and try it!</p>
        </div>
      </div>
    </MenuContainer>
  )
}

export default HomeRoute
