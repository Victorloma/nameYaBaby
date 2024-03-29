import Head from 'next/head'
import AuthMenuNavbar from '../components/AuthMenuNavbar'
import Signin from '../components/SignIn'
import Footer from '../components/Footer'

export default function LoginPage() {
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
        <AuthMenuNavbar />
        <Signin />
        <Footer />
      </div>
    </div>
  )
}
