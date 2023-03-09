import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../sections/Content'
import { useSession, useUser } from '@supabase/auth-helpers-react'
import MenuPage from './menu'
import supabase from '../config/supabaseClient'
import { useEffect } from 'react'

export default function Home() {
  const session = useSession()
  // //const user = useUser()

  // useEffect(() => {
  //   const getData = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser()
  //   }
  //   getData()
  // }, [])

  // console.log(user)

  // console.log('session ' + session)
  // console.log('user ' + user)
  if (!session) {
    return <MenuPage />
  }

  return (
    <div className=''>
      <Head>
        <title>BabyNamer</title>
        <meta
          name='Name your baby'
          content='Find the perfect name for your little one!'
        />
        <link rel='icon' href='/baby-face-icon.png' />
      </Head>
      <div className='height relative overflow-hidden'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  )
}
