const NavbarMenu = () => {
  return (
    <div className='bg-slate-800 rounded-full flex flex-row items-center gap-2 p-0.5 cursor-pointer' onClick={openMenu}>
      <LoadImage loading={Boolean(user?.images?.length)} image={user?.images} size={'2xl'} />

      <span className='font-bold text-sm'>{user?.name}</span>

      <div className='mr-2'>
        <MenuIcon />
      </div>
    </div>
  )
}

export default NavbarMenu
