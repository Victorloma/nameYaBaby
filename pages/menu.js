import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Footer from '../components/Footer'
import MenuCard from '../components/MenuCard'
import MenuNavbar from '../components/MenuNavbar'

export default function MenuPage() {
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
      <div className='h-[90vh] flex flex-col justify-between'>
        <MenuNavbar />
        <MenuCard />
        <Footer />
      </div>
    </div>
  )
}
