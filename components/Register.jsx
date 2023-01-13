'use client'

const Register = () => {
  return (
    <main className='shadow-2xl h-[60vh] w-[80vw] md:w-[50vw] lg:w-[35vw] bg-white bg-opacity-20 rounded-lg overflow-hidden relative z-2 border-slate-100 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
      <form className='h-full flex flex-col justify-evenly items-center'>
        <div className='text-white font-poppins text-2xl tracking-widest'>
          Sign up
        </div>
        <input
          type='email'
          placeholder='email'
          className='font-poppins bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white placeholder:text-slate-200 tracking-wide'
        />
        <input
          type='password'
          placeholder='password'
          className='bg-transparent border border-t-0 border-l-0 border-r-0 focus:outline-none text-white placeholder:text-slate-200 tracking-wide'
        />
        <div className='flex-col text-center'>
          <button className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80'>
            Register
          </button>
          <p className='mt-1 text-sm text-slate-100'>
            Already have an account? <a className='cursor-pointer'>Sign in</a>
          </p>
        </div>
      </form>
    </main>
  )
}

export default Register
