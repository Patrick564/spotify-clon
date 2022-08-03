const MenuContainer = ({ children }) => {
  return (
    <main className='text-white bg-local bg-gradient-to-b from-sky-900 via-slate-900 to-slate-900 overflow-y-auto overflow-x-hidden col-start-2 row-span-2 flex flex-col gap-3 px-10 z-10'>
      {children}
    </main>
  )
}

export default MenuContainer
