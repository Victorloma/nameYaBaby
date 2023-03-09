'use client'

import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'

const MenuCard = () => {
  const supabase = useSupabaseClient()
  const handleGuestLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_KEY,
    })
  }

  return (
    <main className='flex justify-center'>
      <div className='shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] bg-white bg-opacity-20 rounded-lg overflow-hidden relative z-2 border-slate-100 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
        <menu className='h-full flex flex-col justify-center gap-20 items-center'>
          <Link
            href='/login'
            className='text-white font-poppins text-2xl tracking-widest cursor-pointer shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'
          >
            Sign in
          </Link>

          <Link
            href='/register'
            className='text-white font-poppins text-2xl tracking-widest cursor-pointer shadow-lg border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'
          >
            Sign up
          </Link>

          <button
            href=''
            className='text-white font-poppins text-1xl tracking-widest cursor-pointer hover:border  border-b-0 border-opacity-30 border-slate-100 rounded-full px-10 py-3 hover:bg-white hover:bg-opacity-10'
            onClick={() => handleGuestLogin()}
          >
            Try it out as a guest!
          </button>
        </menu>
      </div>
    </main>
  )
}

export default MenuCard
