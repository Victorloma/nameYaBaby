import Head from 'next/head'
import MenuNavbar from '../components/MenuNavbar'
import Register from '../components/Register'
import Footer from '../components/Footer'

export default function RegisterPage() {
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
        <Register />
        <Footer />
      </div>
    </div>
  )
}
