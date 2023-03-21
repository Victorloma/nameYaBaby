'use client'

import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faStar } from '@fortawesome/free-solid-svg-icons'

const MenuCard = () => {
  const supabase = useSupabaseClient()

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <main className='flex justify-center'>
      <div className='shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] bg-white bg-opacity-20 rounded-lg overflow-hidden relative z-2 border-slate-100 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
        <menu className='h-full flex flex-col justify-center gap-20 items-center'>
          <Link
            href='/'
            className='cursor-pointer absolute top-0 right-4 text-5xl text-slate-100'
          >
            &times;
          </Link>
          <Link
            href='/favorites'
            className='group flex items-center gap-4 text-white font-poppins text-lg md:text-2xl tracking-widest cursor-pointer shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'
          >
            <FontAwesomeIcon
              icon={faStar}
              size='1x'
              className='opacity-75 group-hover:opacity-100'
            />
            Favorite names
          </Link>

          <button
            onClick={() => logout()}
            className='group flex items-center gap-4 text-white font-poppins text-lg md:text-2xl tracking-widest cursor-pointer shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size='1x'
              className='opacity-75 group-hover:opacity-100'
            />
            <p>Sign out</p>
          </button>
        </menu>
      </div>
    </main>
  )
}

export default MenuCard
