import Head from 'next/head'
import Footer from '../components/Footer'
import MenuCard from '../components/AuthMenuCard'
import MenuNavbar from '../components/AuthMenuNavbar'

export default function AuthMenuPage() {
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
        <MenuNavbar />
        <MenuCard />
        <Footer />
      </div>
    </div>
  )
}
