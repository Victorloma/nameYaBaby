import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../sections/Content'
import { useSession } from '@supabase/auth-helpers-react'
import MenuPage from './menu'
import { useSelector } from 'react-redux'
import { selectMenu } from '../redux/selectors'
import LoginPage from './login'
import RegisterPage from './register'

export default function Home() {
  const menu = useSelector(selectMenu)
  const session = useSession()

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
