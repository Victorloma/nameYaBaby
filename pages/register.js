import Head from 'next/head'
import Register from '../components/Register'

export default function RegisterPage() {
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
      <div className='height relative overflow-hidden w-full h-[100vh] sm:h-[100vh] flex justify-center items-center'>
        <Register />
      </div>
    </div>
  )
}
