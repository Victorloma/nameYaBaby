import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSession } from '@supabase/auth-helpers-react'
import AuthMenuPage from './welcome'
import FavNamecard from '../components/FavNameCard'

export default function menu() {
  const session = useSession()

  if (!session) {
    return <AuthMenuPage />
  }

  return (
    <div>
      <Head>
        <title>BabyNamer</title>
        <meta
          name='Name your baby'
          content='Find the perfect name for your little one!'
        />
        <link rel='icon' href='/baby-face-icon.png' />
      </Head>
      <div className='h-[100svh] flex flex-col justify-between overflow-hidden'>
        <Navbar />
        <FavNamecard />
        <Footer />
      </div>
    </div>
  )
}
