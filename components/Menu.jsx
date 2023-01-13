'use client'

const Menu = () => {
  return (
    <main className='shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] bg-white bg-opacity-20 rounded-lg overflow-hidden relative z-2 border-slate-100 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
      <menu className='h-full flex flex-col justify-center gap-20 items-center'>
        <div className='text-white font-poppins text-2xl tracking-widest cursor-pointer shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'>
          Sign in
        </div>
        <div className='text-white font-poppins text-2xl tracking-widest cursor-pointer shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'>
          Sign up
        </div>
        <div className='text-white font-poppins text-1xl tracking-widest cursor-pointer hover:border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'>
          I don't feel like logging in
        </div>
      </menu>
    </main>
  )
}

export default Menu
